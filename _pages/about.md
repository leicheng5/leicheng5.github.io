---
permalink: /
title: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---


I am a Research Faculty in the Department of Civil and Environmental Engineering (CEE)-[Maryland Transportation Institute (MTI)](https://mti.umd.edu/), [University of Maryland, College Park (UMD)](https://umd.edu/). I am honored to work under the supervision of [Dr. Xianfeng (Terry) Yang](https://cee.umd.edu/clark/faculty/1706/Xianfeng-Terry-Yang) and be part of the [Maryland Transportation & Artificial Intelligence Lab (M-TRAIL)](https://mtrail.umd.edu/). 

Previously, I received my Ph.D. in Electrical and Computer Engineering from the [University of Arizona](https://ece.engineering.arizona.edu/) in 2025, where I was fortunate to be advised by [Dr. Siyang Cao](https://ece.engineering.arizona.edu/faculty-staff/faculty/siyang-cao) in the [UA Radar Group](https://github.com/radar-lab). From 2019 to 2021, I worked at the Artificial Intelligence Research Center, [Peng Cheng Laboratory (PCL)](https://www.pcl.ac.cn/). I earned my M.E. in Integrated Circuit Engineering from [Peking University](https://english.pku.edu.cn/) in 2019 and my B.S. in Applied Physics from [Northeast Petroleum University](https://www.nepu.edu.cn/en/) in 2016. 



My research aims to turn raw sensor data into dependable intelligence for the physical world, with applications in *autonomous driving*, *intelligent transportation systems*, and *smart robotics*. Interests include:


<div class="smaller-text" markdown="1">
- 📸 **Sensor Data Processing**  
  *Multi-sensor fusion* and *calibration* across Camera · Radar · LiDAR · GNSS, with attention to *spatial alignment*, *time synchronization*, *uncertainty modeling*, and *long-term stability*.

- 🎯 **Deep Learning-based Perception**  
  Deep models for *object classification*, *detection*, and *multi-object tracking (MOT)*, with the goal of achieving *real-time, reliability-aware perception* in uncertain and dynamic environments. I also seek to develop *perception-driven prediction, control, and planning* strategies that seamlessly translate perception into action, ultimately supporting proactive, safety-critical decisions at system scale.

- 🔀 **Multimodal Deep Learning**  
  *Vision-Language Models (VLMs)* and *Representation Learning* that integrate information from *multiple sensors and modalities* (e.g., vision, language, and spatial signals) to couple low-level perception with high-level semantics and reasoning for *comprehensive* environmental understanding. 
</div>



> **Research theme.** *From raw, heterogeneous sensors to reliable, quantitatively validated situational awareness for the real world.*

---


# 📢 News  
<div class="smaller-text" markdown="1">
- *[08/2025]* — 🏆 Joined the *University of Maryland, College Park (UMD)* as a Faculty Assistant.  
- *[06/2025]* — 🌟 Featured in the *ECE Class of 2025 Spotlight* at the University of Arizona.  
- *[05/2025]* — 🎓 I defended my *[dissertation](https://arizona.aws.openrepository.com/handle/10150/678263){:target="_blank" rel="noopener"}* and graduated from the University of Arizona!  
- *[01/2025]* — 📄 Paper accepted to *IEEE Transactions on Radar Systems (TRS)*.  
- *[07/2024]* — 📄 Paper accepted to *IEEE Transactions on Intelligent Transportation Systems (T-ITS)*.  
- *[05/2023]* — 🎤 Presented a paper at the *2023 IEEE Radar Conference (RadarConf23)*.  
</div>

> Looking for collaborators and open-source contributors? Ping me on email or GitHub!

---

# 🔬 Selected Projects

{% for project in site.data.projects %}
  {% include project-card.html project=project %}
{% endfor %}



> Want a quick tour? I’m happy to share short Loom demos or live notebooks.

---

# 🧰 Featured GitHub repos {#featured-repos}

<p class="repos-intro">{{ site.data.featured_repos.intro }}</p>

<div id="filters-repos" class="filters">
  {% for c in site.data.featured_repos.categories %}
    <button class="filter-pill{% if forloop.first %} active{% endif %}" data-filter="{{ c.key }}">{{ c.label }}</button>
  {% endfor %}
</div>

<div id="github-cards">
  {% assign items = site.data.featured_repos.repos %}
  {% comment %} stars  {% endcomment %}
  {% assign items = items | sort: "stars" | reverse %}
  {% for repo in items %}
    {% include repo-card.html repo=repo %}
  {% endfor %}
</div>

<script>
(function() {
  const pills = document.querySelectorAll('#filters-repos .filter-pill');
  const cards = document.querySelectorAll('#github-cards .github-card');

  function applyFilter(key) {
    cards.forEach(card => {
      const cat = card.getAttribute('data-filter') || 'all';
      card.style.display = (key === 'all' || key === cat) ? '' : 'none';
    });
  }
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      pills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });
})();
</script>


---

# 🖼️ Gallery {#gallery}


<p class="gallery-intro">{{ site.data.gallery.intro }}</p>

<div class="gallery-wrap">
  {% for item in site.data.gallery.items %}
  <div class="gallery">
    <a href="{{ item.src }}" target="_blank" rel="noopener">
      <img src="{{ item.src }}" alt="{{ item.alt | escape }}" loading="lazy">
    </a>
    <div class="desc">
      {{ item.caption }} ({{ item.year }})
    </div>
  </div>
  {% endfor %}
  <div class="clearfix"></div>
</div> 


> Make time for the unmeasured—quiet, beauty, and the next bend in the road.
 


