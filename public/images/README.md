# Images Directory

Place your images here following this structure:

```
public/
  images/
    profile/
      profile.jpg         ← Your profile photo (used in Hero & About sections)
    
    projects/
      project-1/
        thumbnail.jpg     ← Main project card image (16:9 recommended)
        screenshot-1.jpg  ← Gallery screenshot 1
        screenshot-2.jpg  ← Gallery screenshot 2
        screenshot-3.jpg  ← Gallery screenshot 3 (optional)
      
      project-2/
        thumbnail.jpg
        screenshot-1.jpg
        ... (add as many screenshots as needed)
      
      (continue for each project)
    
    achievements/
      achievement-1.jpg   ← Certificate/award image for achievement #1
      achievement-2.jpg   ← Certificate/award image for achievement #2
      (match the IDs in src/data/achievements.js)
    
    certifications/
      cert-1.jpg          ← Certificate image for certification #1
      cert-2.jpg          ← Certificate image for certification #2
      (match the IDs in src/data/certifications.js)
    
    og-image.png          ← Open Graph image (1200x630px recommended)
  
  resume/
    resume.pdf            ← Your resume PDF
```

## Important Notes

1. **Profile image**: Add at `public/images/profile/profile.jpg`
2. **Project images**: Create a subfolder per project (project-1, project-2, etc.)
   - The folder numbers must match the `id` field in `src/data/projects.js`
3. **Image formats**: JPG/PNG/WebP all work. JPG recommended for photos.
4. **Image sizes**:
   - Profile: 800x800px or larger (square preferred)
   - Thumbnails: 1280x720px (16:9 ratio)
   - Screenshots: 1280x720px or original device screenshots
   - Achievements/Certs: Original scan/download is fine
