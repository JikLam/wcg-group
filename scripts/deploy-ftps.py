"""Upload only the validated static export over explicit FTPS. Never delete remote files."""
import ftplib
import os
from pathlib import Path
import ssl


def deploy():
    root = Path("out")
    for required in ("index.html", ".htaccess", "contact/index.html", "api/contact.php"):
        if not (root / required).is_file():
            raise SystemExit(f"Missing build file: {required}")
    remote = os.environ.get("FTP_REMOTE_DIR", "").strip()
    if not remote or not remote.startswith("/") or ".." in remote.split("/"):
        raise SystemExit("Set FTP_REMOTE_DIR to the exact website directory, or / for a restricted account.")
    if remote != "/" and not remote.rstrip("/").endswith("/public_html"):
        raise SystemExit("The deployment directory must be a public_html folder or restricted account root.")
    files = [p for p in root.rglob("*") if p.is_file()]
    if any(p.is_symlink() for p in root.rglob("*")):
        raise SystemExit("Symlinks are not supported in the static export.")
    # Upload versioned assets first, then pages referencing them. Keep previous assets for open tabs.
    files.sort(key=lambda p: (p.suffix == ".html", p.relative_to(root).as_posix()))
    with ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=60) as ftp:
        ftp.connect(os.environ["FTP_HOST"], 21)
        ftp.login(os.environ["FTP_USER"], os.environ["FTP_PASSWORD"])
        ftp.prot_p()
        ftp.cwd(remote)
        base = ftp.pwd()
        for file in files:
            relative = file.relative_to(root)
            ftp.cwd(base)
            for folder in relative.parts[:-1]:
                try:
                    ftp.cwd(folder)
                except ftplib.error_perm:
                    ftp.mkd(folder)
                    ftp.cwd(folder)
            # A complete file replaces the old one only after upload succeeds.
            temporary = ".wcg-upload-" + relative.name
            with file.open("rb") as stream:
                ftp.storbinary("STOR " + temporary, stream)
            ftp.rename(temporary, relative.name)
        print(f"Uploaded {len(files)} website files. No remote files were deleted.")


if __name__ == "__main__":
    deploy()
