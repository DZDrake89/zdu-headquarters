# ZDU Blog and Video Publishing

The website is configured for Pages CMS, a visual editor that saves content to GitHub. Vercel then republishes the website automatically.

## One-time connection

1. Go to https://app.pagescms.org
2. Sign in with the GitHub account that owns `DZDrake89/zdu-headquarters`.
3. Install or authorize the Pages CMS GitHub App for the `zdu-headquarters` repository.
4. Select the repository and the `main` branch.
5. Open **Blog and Video Posts**.

The editor reads its fields from `.pages.yml` in the repository.

## Publish an article

1. Choose **Blog and Video Posts** and create a new entry.
2. Enter the title and a lowercase URL slug.
3. Select **Blog article**.
4. Add the category, date, description, cover image, and article content.
5. Turn on **Published**.
6. Save the post.

## Publish a video

1. Create a new entry and select **Video post**.
2. Paste the full YouTube or Vimeo URL into **YouTube or Vimeo URL**.
3. Add a thumbnail if desired. YouTube thumbnails can also appear automatically.
4. Add a short description and supporting notes in the post content.
5. Turn on **Published** and save.

## Drafts

Leave **Published** turned off to save a draft without showing it on the website.

## Crop and reposition a cover photo

After uploading the cover image, use **Photo crop shape** to choose landscape, wide, square, portrait, or the full original image. Use **Photo focus position** to keep the important part of the photo visible when it is cropped. These settings control both the resource card focus and the full article cover without changing the original file.

## What happens after saving

Pages CMS commits the content to GitHub. Vercel detects the change and normally republishes the site within a minute or two.
