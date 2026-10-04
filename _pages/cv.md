---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-page">
  <p class="cv-toolbar">
    <a class="cv-download" href="{{ base_path }}/files/CV_LeiCheng.pdf" target="_blank" rel="noopener">
      Download PDF
    </a>
  </p>

  <div class="cv-viewer">
    <iframe
      src="{{ base_path }}/files/CV_LeiCheng.pdf"
      title="Lei Cheng CV"
      type="application/pdf">
    </iframe>
    <p class="cv-fallback">
      Your browser cannot display this PDF.
      <a href="{{ base_path }}/files/CV_LeiCheng.pdf" target="_blank" rel="noopener">Open it in a new tab</a>.
    </p>
  </div>
</div>

<style>
.cv-page {
  margin-top: 0.4rem;
}

.cv-toolbar {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 0.85rem 0;
}

.cv-download {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: #f36b21;
  color: #ffffff !important;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none !important;
}

.cv-download:hover {
  background: #d85a15;
}

.cv-viewer {
  width: 100%;
  height: 85vh;
  min-height: 720px;
  border: 1px solid rgba(22, 50, 79, 0.13);
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(22, 50, 79, 0.055);
}

.cv-viewer iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.cv-fallback {
  display: none;
  margin: 1rem;
  color: #3f4a56;
}

@media (max-width: 760px) {
  .cv-viewer {
    height: 75vh;
    min-height: 520px;
  }
}
</style>
