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



<section class="research-vision">

  <div class="vision-hero">
    <div class="vision-label">Research Vision</div>

    <h2>Reliable Autonomous Intelligence in the Physical World</h2>

    <p>
      My research seeks to build the scientific and computational foundations for reliable autonomous intelligence in the physical world. Autonomy is not merely a perception problem; it is a closed-loop challenge in which machines must sense uncertain environments, understand evolving situations, and make timely decisions with imperfect information.
    </p>

    <p>
      In real-world systems, sensors may fail, calibration may drift, observations are often incomplete, and rare events can dominate safety outcomes. My work advances the <em>perception--understanding--decision</em> loop for intelligent autonomous systems by unifying multi-sensor fusion, reliability-aware perception, multimodal deep learning, and AI foundation models with downstream prediction, control, and planning.
    </p>

    <div class="vision-question">
      How can autonomous systems perceive, reason, and act reliably when the world is noisy, dynamic, and only partially observable?
    </div>
  </div>

  <div class="research-pillars">

    <div class="pillar-card">
      <div class="pillar-top">
        <span class="pillar-number">01</span>
        <span class="pillar-tag">Perception Foundation</span>
      </div>

      <h3>Multi-Sensor Fusion and Deep Perception</h3>

      <div class="keyword-row">
        <span>Camera</span>
        <span>Radar</span>
        <span>LiDAR</span>
        <span>GNSS</span>
        <span>Edge AI</span>
      </div>

      <p>
        I develop reliable multimodal perception methods that transform heterogeneous sensor data into robust situational awareness. This direction integrates sensing modalities through calibration, spatial alignment, temporal synchronization, uncertainty modeling, adaptive fusion, and deep representation learning.
      </p>

      <p>
        Beyond improving accuracy on standard benchmarks, my goal is to create perception systems that understand their own reliability, detect degradation, and remain functional under occlusion, adverse weather, sensor faults, domain shift, and real-time deployment constraints. This research establishes the perceptual foundation for autonomy that can operate beyond idealized laboratory conditions.
      </p>
    </div>

    <div class="pillar-card">
      <div class="pillar-top">
        <span class="pillar-number">02</span>
        <span class="pillar-tag">AI-Enabled Autonomy</span>
      </div>

      <h3>Multimodal AI Foundation Models for Autonomous Systems</h3>

      <div class="keyword-row">
        <span>Vision</span>
        <span>Geometry</span>
        <span>Motion</span>
        <span>Language</span>
        <span>Semantics</span>
      </div>

      <p>
        I explore how multimodal AI foundation models can enable a new generation of autonomous systems that are more generalizable, context-aware, and adaptive. This direction studies how vision, geometry, motion, language, and semantics can be unified into physically grounded representations that connect low-level sensing with high-level reasoning.
      </p>

      <p>
        Rather than treating foundation models as black-box predictors, my research aims to constrain them with sensor evidence, scene geometry, temporal dynamics, uncertainty estimation, and physical plausibility. The long-term vision is to develop foundation-model-enabled autonomy that can support open-world perception, semantic reasoning, human-system communication, self-supervised adaptation, and safe decision support in complex real environments.
      </p>
    </div>

    <div class="pillar-card">
      <div class="pillar-top">
        <span class="pillar-number">03</span>
        <span class="pillar-tag">Closed-Loop Intelligence</span>
      </div>

      <h3>Intelligent Autonomous Systems: Prediction, Control, and Planning</h3>

      <div class="keyword-row">
        <span>Prediction</span>
        <span>Control</span>
        <span>Planning</span>
        <span>Safety</span>
        <span>Human Factors</span>
      </div>

      <p>
        Reliable perception matters only when it leads to better decisions. I study how perception, uncertainty, and scene understanding can be translated into risk-aware prediction, control, and planning for intelligent autonomous systems.
      </p>

      <p>
        In transportation and autonomous driving, this includes predictive safety systems, variable speed limits, advanced safety warnings, uncertainty-aware motion prediction, and planning under occlusion, poor visibility, and rare events. In robotics and smart manufacturing, it includes anomaly-aware monitoring, intent inference, and adaptive operation in human-centered environments. My broader goal is to move autonomy evaluation from isolated perception accuracy toward system-level intelligence, using metrics such as safety margin, robustness, throughput, intervention rate, and human/operator workload.
      </p>
    </div>

  </div>

  <div class="research-theme-box">
    <span>Research Theme</span>
    <p>
      From heterogeneous sensing to trustworthy autonomous intelligence: perception, reasoning, and decision-making under uncertainty.
    </p>
  </div>

</section>

<style>
.research-vision {
  margin-top: 2.2rem;
  margin-bottom: 2.5rem;
}

.vision-hero {
  position: relative;
  padding: 1.7rem 1.8rem;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(0, 73, 118, 0.96), rgba(18, 43, 73, 0.96)),
    radial-gradient(circle at top right, rgba(255, 130, 0, 0.28), transparent 36%);
  color: #ffffff;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.vision-hero::after {
  content: "";
  position: absolute;
  right: -80px;
  top: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 130, 0, 0.18);
}

.vision-label {
  display: inline-block;
  margin-bottom: 0.7rem;
  padding: 0.25rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f8d7a1;
}

.vision-hero h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #ffffff;
  font-size: 1.55rem;
  line-height: 1.25;
}

.vision-hero p {
  position: relative;
  z-index: 1;
  margin-bottom: 0.85rem;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.96rem;
  line-height: 1.65;
}

.vision-question {
  position: relative;
  z-index: 1;
  margin-top: 1.1rem;
  padding: 0.95rem 1.1rem;
  border-left: 4px solid #ff8200;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.10);
  color: #ffffff;
  font-style: italic;
  line-height: 1.55;
}

.research-pillars {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
  margin-top: 1.35rem;
}

.pillar-card {
  padding: 1.35rem 1.45rem;
  border: 1px solid rgba(0, 73, 118, 0.13);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #fbfcfe);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.pillar-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
  border-color: rgba(255, 130, 0, 0.35);
}

.pillar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
}

.pillar-number {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ff8200;
  letter-spacing: 0.02em;
}

.pillar-tag {
  padding: 0.22rem 0.62rem;
  border-radius: 999px;
  background: rgba(0, 73, 118, 0.08);
  color: #004976;
  font-size: 0.72rem;
  letter-spacing: 0.02em;
}

.pillar-card h3 {
  margin-top: 0.2rem;
  margin-bottom: 0.75rem;
  color: #12304a;
  font-size: 1.15rem;
  line-height: 1.35;
}

.keyword-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
  margin-bottom: 0.9rem;
}

.keyword-row span {
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  background: rgba(255, 130, 0, 0.10);
  color: #7a3d00;
  font-size: 0.72rem;
}

.pillar-card p {
  margin-bottom: 0.75rem;
  color: #3f4a56;
  font-size: 0.93rem;
  line-height: 1.65;
}

.research-theme-box {
  margin-top: 1.25rem;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  border-left: 5px solid #ff8200;
  background: #f7f9fb;
}

.research-theme-box span {
  display: block;
  margin-bottom: 0.25rem;
  color: #004976;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.research-theme-box p {
  margin: 0;
  color: #1f2f3f;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.55;
}

@media (min-width: 980px) {
  .research-pillars {
    grid-template-columns: repeat(3, 1fr);
  }

  .pillar-card {
    padding: 1.2rem 1.25rem;
  }

  .pillar-card p {
    font-size: 0.88rem;
  }

  .pillar-card h3 {
    font-size: 1.05rem;
  }
}

@media (max-width: 640px) {
  .vision-hero {
    padding: 1.35rem 1.2rem;
  }

  .vision-hero h2 {
    font-size: 1.28rem;
  }

  .pillar-card {
    padding: 1.15rem 1.1rem;
  }
}
</style>

---


# 📢 News  
<div class="smaller-text" markdown="1">
- *[11/2025]* — 🎉 Paper accepted to *IEEE Transactions on Instrumentation and Measurement (T-IM)*.
- *[10/2025]* — 🎉 Paper accepted to *IEEE Transactions on Intelligent Transportation Systems (T-ITS)*.
- *[10/2025]* — 🏆 Unlocked first GitHub Achievement *Starstruck*: Created a highly-starred repository.  
- *[08/2025]* — 🏆 Joined the *University of Maryland, College Park (UMD)* as a Faculty Assistant.  
- *[06/2025]* — 🌟 Featured in the *ECE Class of 2025 Spotlight* at the University of Arizona.  
- *[05/2025]* — 🎓 I defended my *[dissertation](https://arizona.aws.openrepository.com/handle/10150/678263){:target="_blank" rel="noopener"}* and graduated from the University of Arizona!  
- *[01/2025]* — 🎉 Paper accepted to *IEEE Transactions on Radar Systems (TRS)*.  
- *[07/2024]* — 🎉 Paper accepted to *IEEE Transactions on Intelligent Transportation Systems (T-ITS)*.  
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
 


