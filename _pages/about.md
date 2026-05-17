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



# Research Vision

My research seeks to build the scientific and computational foundations for reliable autonomous intelligence in the physical world. Autonomy is not merely a perception problem; it is a closed-loop challenge in which machines must sense uncertain environments, understand evolving situations, and make timely decisions with imperfect information. In real-world systems, sensors may fail, calibration may drift, observations are often incomplete, and rare events can dominate safety outcomes. My work advances the <strong>perception--understanding--decision</strong> loop for intelligent autonomous systems by unifying multi-sensor fusion, reliability-aware perception, multimodal deep learning, and AI foundation models with downstream prediction, control, and planning.

<div class="research-question">
  The central question that drives my research is: <em>How can autonomous systems perceive, reason, and act reliably when the world is noisy, dynamic, and only partially observable?</em>
</div>

I address this question through three closely connected research directions:

<div class="research-directions">

  <div class="research-card">
    <div class="research-card-left">
      <div class="research-number">01</div>
      <div class="research-mini-label">Perception</div>
    </div>

    <div class="research-card-right">
      <h3>Multi-Sensor Fusion and Deep Perception</h3>

      <p>
        I develop reliable multimodal perception methods that transform heterogeneous sensor data into robust situational awareness. This direction integrates Camera · Radar · LiDAR · GNSS and other sensing modalities through calibration, spatial alignment, temporal synchronization, uncertainty modeling, adaptive fusion, and deep representation learning. Beyond improving accuracy on standard benchmarks, my goal is to create perception systems that understand their own reliability, detect degradation, and remain functional under occlusion, adverse weather, sensor faults, domain shift, and real-time deployment constraints. This research establishes the perceptual foundation for autonomy that can operate beyond idealized laboratory conditions.
      </p>
    </div>
  </div>

  <div class="research-card">
    <div class="research-card-left">
      <div class="research-number">02</div>
      <div class="research-mini-label">Foundation AI</div>
    </div>

    <div class="research-card-right">
      <h3>Multimodal AI Foundation Models for Autonomous Systems</h3>

      <p>
        I explore how multimodal AI foundation models can enable a new generation of autonomous systems that are more generalizable, context-aware, and adaptive. This direction studies how vision, geometry, motion, language, and semantics can be unified into physically grounded representations that connect low-level sensing with high-level reasoning. Rather than treating foundation models as black-box predictors, my research aims to constrain them with sensor evidence, scene geometry, temporal dynamics, uncertainty estimation, and physical plausibility. The long-term vision is to develop foundation-model-enabled autonomy that can support open-world perception, semantic reasoning, human-system communication, self-supervised adaptation, and safe decision support in complex real environments.
      </p>
    </div>
  </div>

  <div class="research-card">
    <div class="research-card-left">
      <div class="research-number">03</div>
      <div class="research-mini-label">Systems</div>
    </div>

    <div class="research-card-right">
      <h3>Intelligent Autonomous Systems: Prediction, Control, and Planning</h3>

      <p>
        Reliable perception matters only when it leads to better decisions. I study how perception, uncertainty, and scene understanding can be translated into risk-aware prediction, control, and planning for intelligent autonomous systems. In transportation and autonomous driving, this includes predictive safety systems, variable speed limits, advanced safety warnings, uncertainty-aware motion prediction, and planning under occlusion, poor visibility, and rare events. In robotics and smart manufacturing, it includes anomaly-aware monitoring, intent inference, and adaptive operation in human-centered environments. My broader goal is to move autonomy evaluation from isolated perception accuracy toward system-level intelligence, using metrics such as safety margin, robustness, throughput, intervention rate, and human/operator workload.
      </p>
    </div>
  </div>

</div>

<div class="research-theme">
  <span>Research theme.</span>
  <em>From heterogeneous sensing to trustworthy autonomous intelligence: perception, reasoning, and decision-making under uncertainty.</em>
</div>

<style>
/* ===== Research Vision Section ===== */

.research-question {
  position: relative;
  margin: 1.35rem 0 1.55rem 0;
  padding: 1.05rem 1.25rem 1.05rem 1.35rem;
  border-left: 5px solid #b45f06;
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(180, 95, 6, 0.075), rgba(255, 255, 255, 0.96)),
    #f8f9fb;
  color: #243447;
  line-height: 1.68;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.035);
}

.research-question::before {
  content: "Core Question";
  display: block;
  margin-bottom: 0.35rem;
  color: #8a4a05;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.research-directions {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  margin-top: 1.35rem;
}

/* ===== Horizontal Research Cards ===== */

.research-card {
  position: relative;
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 1.25rem;
  padding: 1.35rem 1.45rem;
  border: 1px solid rgba(22, 50, 79, 0.13);
  border-radius: 18px;
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
  box-shadow:
    0 8px 24px rgba(22, 50, 79, 0.055),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.research-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #b45f06, #16324f);
  opacity: 0.85;
}

.research-card::after {
  content: "";
  position: absolute;
  right: -60px;
  top: -60px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(180, 95, 6, 0.08), transparent 68%);
  pointer-events: none;
}

.research-card:hover {
  transform: translateY(-3px);
  border-color: rgba(180, 95, 6, 0.38);
  box-shadow:
    0 14px 32px rgba(22, 50, 79, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

/* ===== Left Number Panel ===== */

.research-card-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 1rem;
  border-right: 1px solid rgba(22, 50, 79, 0.12);
}

.research-number {
  position: relative;
  width: 64px;
  height: 64px;
  margin-top: 0.1rem;
  margin-bottom: 0.65rem;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(180, 95, 6, 0.12), rgba(22, 50, 79, 0.06));
  color: #b45f06;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-mini-label {
  color: #16324f;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.35;
}

/* ===== Right Content Panel ===== */

.research-card-right {
  position: relative;
  z-index: 1;
}

.research-card h3 {
  margin-top: 0;
  margin-bottom: 0.65rem;
  color: #16324f;
  font-size: 1.13rem;
  line-height: 1.35;
  font-weight: 800;
}

.research-card p {
  margin: 0;
  color: #3f4a56;
  font-size: 0.95rem;
  line-height: 1.72;
}

/* ===== Research Theme ===== */

.research-theme {
  margin-top: 1.35rem;
  padding: 1rem 1.2rem;
  border-left: 5px solid #16324f;
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(22, 50, 79, 0.07), rgba(180, 95, 6, 0.045));
  color: #1f2f3f;
  line-height: 1.58;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.035);
}

.research-theme span {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 800;
  color: #16324f;
  letter-spacing: 0.02em;
}

/* ===== Mobile Layout ===== */

@media (max-width: 760px) {
  .research-card {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    padding: 1.15rem 1rem;
  }

  .research-card-left {
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.75rem;
    border-right: none;
    border-bottom: 1px solid rgba(22, 50, 79, 0.12);
    padding-right: 0;
    padding-bottom: 0.75rem;
  }

  .research-number {
    width: 52px;
    height: 52px;
    margin: 0;
    font-size: 1.25rem;
    border-radius: 14px;
  }

  .research-mini-label {
    text-align: left;
  }

  .research-card h3 {
    font-size: 1.03rem;
  }

  .research-card p {
    font-size: 0.92rem;
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
 


