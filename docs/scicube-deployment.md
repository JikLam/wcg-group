# Scicube deployment trial

The GitHub workflow builds the static site after pushes to `main`, validates it,
and retains a downloadable website artifact for 14 days. It uploads to staging
only when staging credentials exist. Production is a manual workflow run with
`target: production`. Missing credentials result in an explicit skipped upload,
not a successful hosting deployment.

## One-time setup

1. In DirectAdmin create a dedicated FTP account restricted to the staging
   website directory. Ask Scicube for the explicit FTPS hostname whose TLS
   certificate is valid and confirm explicit FTPS on port 21 is supported.
2. Open GitHub repository Settings → Secrets and variables → Actions.
3. Add repository secrets `STAGING_FTP_HOST`, `STAGING_FTP_USER`,
   `STAGING_FTP_PASSWORD`. Enter credentials in GitHub, never in a chat or file.
4. Add repository variable `STAGING_FTP_REMOTE_DIR`: `/` for an account already
   restricted to staging public_html, otherwise the exact FTP-visible staging
   public_html path. Do not guess the operating system path.
5. Run “Build and deploy Scicube website” with target `staging` and inspect the
   upload log and staging website before configuring production.
6. Create a separate production-restricted FTP account. Add
   `PRODUCTION_FTP_HOST`, `PRODUCTION_FTP_USER`, `PRODUCTION_FTP_PASSWORD` and
   variable `PRODUCTION_FTP_REMOTE_DIR` using the same rules.
7. After reviewing staging, manually run the workflow on `main` with target
   `production`. Only release an already reviewed commit.

The uploader uses certificate-verified TLS for both control and data channels.
It uploads generated assets before HTML and renames complete temporary files.
It never deletes server files and does not have DNS or mailbox API access.
The account restriction is essential: the workflow cannot verify the server's
directory mapping. Back up public_html before the first production release.
This is a file-by-file release, not a whole-site atomic switch; verify the result
after completion. To roll back, upload a previously retained build artifact.

No secret values are included in this repository. Hosting uploads require the
one-time account setup before this trial can demonstrate end-to-end publishing.
