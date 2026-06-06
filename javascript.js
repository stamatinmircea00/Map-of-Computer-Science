// Extended data for modal popups
const extendedData = {
  algorithms: {
    title: "Algorithms & Complexity — Deep Dive",
    openProblemsExtended: "P vs NP (Clay Millennium), Graph Isomorphism (complexity class?), Unique Games Conjecture implications for approximation. Recent progress: deterministic primality testing (AKS). Example: Can every problem with a efficiently verifiable solution be solved efficiently?",
    peopleExtended: "Michael Rabin (nondeterminism), Richard Karp (reducibility), László Babai (graph isomorphism breakthrough), Mihai Pătrașcu (lower bounds, ROM), Virginia Vassilevska Williams (matrix multiplication).",
    localExtended: "UVT hosts annual 'Algorithms Day' with Romanian researchers. Ongoing projects: parameterized complexity for bioinformatics, streaming algorithms for network monitoring. Collaboration with Bitdefender on algorithmic security.",
    globalExtended: "ERC Advanced Grants on approximation. Major initiatives: Simons Institute 'Fine-Grained Complexity' program. Open source: FPT algorithms library (igow)."
  },
  ai: {
    title: "Artificial Intelligence & ML — Extended",
    openProblemsExtended: "Causal inference from observational data, robust adversarial defense, sample-efficient reinforcement learning, aligning LLM values. Example: Teach a robot to generalize from 3 demonstrations to new environments.",
    peopleExtended: "Andrej Karpathy (CS231n, Tesla AI), Daphne Koller (probabilistic graphical models), Ian Goodfellow (GANs), Yejin Choi (commonsense AI), Doina Precup (RL, McGill/DeepMind).",
    localExtended: "UVT AI Lab collaborates with e-Austria on time-series forecasting. Projects: medical imaging diagnostics (diabetic retinopathy), NLP for Romanian language (BERT-ro). Student teams at ImageNet competitions.",
    globalExtended: "Partnerships: CLAIRE (European AI), ELLIS units. Major conferences sponsor doctoral symposia. Open source: Hugging Face, PyTorch Lightning."
  },
  software: {
    title: "Software Engineering & PL — Extended",
    openProblemsExtended: "Automated program repair for legacy systems, verification of concurrent/distributed software, gradual typing for dynamic languages. Example: Automatically fix heartbleed-style bugs in C codebases.",
    peopleExtended: "John Backus (Fortran, BNF), Niklaus Wirth (Pascal, Modula), Bertrand Meyer (Design by Contract), Gilad Bracha (newspeak), Laura Inozemtseva (SE metrics).",
    localExtended: "UVT leads open-source development of mOS (microservice orchestrator). Research on model-driven engineering, formal methods for cloud APIs. Industry days with Continental and Adobe.",
    globalExtended: "ACM SIGSOFT distinguished papers. Google's test generation research. European projects: STAMP (automated testing)."
  },
  systems: {
    title: "Computer Systems & Architecture — Extended",
    openProblemsExtended: "Post-Moore era: neuromorphic, quantum-classical hybrid, energy-proportional computing. Verified OS kernels (seL4) and their extension to multicore. Example: Reduce tail latency in serverless functions by 10x.",
    peopleExtended: "Maurice Wilkes (microprogramming), Butler Lampson (PC architecture), Matei Zaharia (Apache Spark), Luiz André Barroso (datacenter design), Timothy Roscoe (OS research).",
    localExtended: "UVT participates in EuroHPC projects. Research on edge-cloud continuum, energy-aware scheduling. Lab equipped with ARM and FPGA clusters. Master thesis at CERN openlab.",
    globalExtended: "ASPLOS hall of fame awards. Open source: Firecracker, Linux kernel contributions. ACM SIGOPS Hall of Fame."
  },
  data: {
    title: "Data Management & Databases — Extended",
    openProblemsExtended: "Polystore query optimization over heterogeneous engines, blockchain-backed data provenance, adaptive indexing for data lakes. Example: Real-time joins over streaming data with 1M+ events/sec.",
    peopleExtended: "Donald Chamberlin (SQL, System R), Jim Gray (transaction concepts), Michael Carey (Apache AsterixDB), Surajit Chaudhuri (query optimization), Renée Miller (data integration).",
    localExtended: "UVT database group works on semantic data lakes, open data portals for Timișoara city. Collaborations with Oracle Academy and MongoDB. Students develop Smart City dashboards.",
    globalExtended: "VLDB Endowment, ACM SIGMOD 'Systems' award. Open source: Apache Calcite, DuckDB. Research on LLM-powered text-to-SQL."
  },
  security: {
    title: "Security & Cryptography — Extended",
    openProblemsExtended: "Post-quantum crypto standardization (NIST), fully homomorphic encryption (practical latency), zero-knowledge scalable rollups. Example: Perform private credit scoring across banks without revealing raw data.",
    peopleExtended: "Mihir Bellare (provable security), Yael Tauman Kalai (SNARKs), Adi Shamir (RSA, side-channel), Daniel J. Bernstein (ChaCha, Curve25519), Cristina Nita-Rotaru (network security).",
    localExtended: "UVT Cybersecurity lab runs penetration testing competitions. Research on blockchain for e-voting, IoT vulnerability scanning. Partner of Romanian National Cyber Security Directorate.",
    globalExtended: "EU CyberSec4Europe initiative. Real World Crypto symposium. Open source: OpenSSL, WireGuard. Zero-knowledge proofs in Zcash."
  }
};

// Base content for each area card
const areasList = [
  { id: "algorithms", name: "Algorithms & Complexity", badge: "UVT · Theory Lab",
    activities: "<strong>Theory:</strong> computability, complexity classes (P, NP, PSPACE). <strong>Experiment:</strong> algorithmic benchmarking, competitive programming. <strong>Design:</strong> approximation algorithms, FPT, streaming algorithms.",
    relations: "<span class='relation-tag'>depends on: mathematics</span> <span class='relation-tag'>influences: AI, Security, DB</span> <span class='relation-tag'>used by: SE, Systems</span>",
    problems: "<strong>P vs NP</strong> — can every verifiable problem be solved efficiently? <strong>Graph isomorphism</strong> (quasi-polynomial). <strong>Unique games conjecture</strong>.",
    people: "Alan Turing, Stephen Cook, Donald Knuth, Leslie Valiant, Avi Wigderson, Mihai Pătrașcu (ROM).",
    venues: "STOC, FOCS, SODA, ICALP · JACM, SICOMP, TALG",
    local: "Courses: Advanced Algorithms, Computational Complexity. Research: 'Algorithms & Complexity Group' (Prof. Daniel Pop, Dr. Adrian Muntean). Student participations: ICPC."
  },
  { id: "ai", name: "Artificial Intelligence & ML", badge: "UVT · AI Lab",
    activities: "<strong>Theory:</strong> statistical learning, PAC, explainability. <strong>Experiment:</strong> model training, neural architecture search. <strong>Design:</strong> LLM pipelines, reinforcement learning agents.",
    relations: "<span class='relation-tag'>depends on: algorithms, statistics</span> <span class='relation-tag'>influences: HCI, robotics, SE</span>",
    problems: "General AI alignment, sample efficiency in RL, robustness to adversarial attacks, causal discovery. <em>Example:</em> autonomous driving perception under distribution shift.",
    people: "Geoffrey Hinton, Yann LeCun, Yoshua Bengio, Demis Hassabis, Judea Pearl, Fei-Fei Li.",
    venues: "NeurIPS, ICML, ICLR, AAAI · JMLR, AIJ, TPAMI",
    local: "AI & Cognitive Computing group (Conf. Dr. Ciprian Crăciun). Courses: ML, Deep Learning, NLP. RomAI conference."
  },
  { id: "software", name: "Software Engineering & PL", badge: "UVT · LPD / PL groups",
    activities: "<strong>Theory:</strong> type systems, formal semantics, program logics. <strong>Experiment:</strong> software testing, performance evaluation. <strong>Design:</strong> DSLs, microservices.",
    relations: "<span class='relation-tag'>depends on: logic, algorithms</span> <span class='relation-tag'>influences: cybersecurity, AI engineering</span>",
    problems: "Verification of concurrent programs, modularity in proof assistants, effect systems. <em>Example:</em> automatic bug repair for legacy codebases.",
    people: "Edsger Dijkstra, Barbara Liskov, John McCarthy, Martin Odersky, Grady Booch.",
    venues: "POPL, PLDI, ICSE, OOPSLA · TOPLAS, TOSEM",
    local: "Parallel and Distributed Systems group (Prof. Dana Petcu). Courses: Functional programming, Compiler design. Industry links: Bosch, Adobe."
  },
  { id: "systems", name: "Computer Systems & Architecture", badge: "UVT · PDS & HPC",
    activities: "<strong>Theory:</strong> performance modeling, memory hierarchies. <strong>Experiment:</strong> benchmarking, microarchitecture simulation. <strong>Design:</strong> OS kernels, edge-cloud infrastructure.",
    relations: "<span class='relation-tag'>depends on: digital logic, compilers</span> <span class='relation-tag'>influences: databases, security, HPC</span>",
    problems: "Post-Moore architectures, energy-efficient exascale, verified OS kernels. <em>Example:</em> serverless cold-start latency reduction.",
    people: "John von Neumann, David Patterson, John L. Hennessy, Butler Lampson, Matei Zaharia.",
    venues: "ASPLOS, ISCA, SOSP, OSDI · TOCS, TC, TPDS",
    local: "High-performance & distributed systems chair (Prof. Florin Pop). Courses: Parallel & Distributed Architectures, EuroCC projects."
  },
  { id: "data", name: "Data Management & Databases", badge: "UVT · DB & big data",
    activities: "<strong>Theory:</strong> relational algebra, query optimization. <strong>Experiment:</strong> NoSQL benchmarking. <strong>Design:</strong> data warehouses, graph databases.",
    relations: "<span class='relation-tag'>depends on: algorithms, storage systems</span> <span class='relation-tag'>influences: ML, AI, security</span>",
    problems: "Polystore integration, privacy-preserving query processing, DB support for LLM retrieval. <em>Example:</em> real-time graph analytics.",
    people: "Edgar F. Codd, Jim Gray, Michael Stonebraker, Jennifer Widom, C. Mohan.",
    venues: "SIGMOD, VLDB, ICDE · TODS, VLDBJ",
    local: "Database research group (Prof. Ciprian-Bogdan Chirilă). Courses: Advanced Databases, Big Data Technologies. Oracle Academy collaboration."
  },
  { id: "security", name: "Security & Cryptography", badge: "UVT · Cybersec lab",
    activities: "<strong>Theory:</strong> cryptographic primitives, proof systems. <strong>Experiment:</strong> penetration testing. <strong>Design:</strong> post-quantum crypto, zero-knowledge proofs.",
    relations: "<span class='relation-tag'>depends on: number theory, complexity, systems</span> <span class='relation-tag'>influences: networks, software</span>",
    problems: "Post-quantum cryptographic standardization, fully homomorphic encryption, zero-day exploit detection. <em>Example:</em> secure multi-party computation.",
    people: "Claude Shannon, Whitfield Diffie, Ron Rivest, Adi Shamir, Shafi Goldwasser.",
    venues: "CRYPTO, EUROCRYPT, IEEE S&P, CCS · JOC, TISSEC",
    local: "Cybersecurity and digital forensics group (Dr. Adrian Deaconu). Courses: Applied Cryptography, Network Security. ECSC participation."
  }
];

// Render cards
const container = document.getElementById("areasContainer");
areasList.forEach(area => {
  const card = document.createElement("div");
  card.className = "area-card";
  card.setAttribute("data-area-id", area.id);
  card.innerHTML = `
    <div class="area-header">
      <div class="area-name">${area.name} <span class="local-badge">${area.badge}</span></div>
    </div>
    <div class="area-content">
      <div class="info-grid">
        <div class="info-block"><h4>⚙️ Activities</h4><p>${area.activities}</p></div>
        <div class="info-block"><h4>🔗 Relations</h4><p>${area.relations}</p></div>
        <div class="info-block"><h4>❗ Important / open problems</h4><p>${area.problems}</p></div>
        <div class="info-block"><h4>👥 Important people</h4><p>${area.people}</p></div>
        <div class="info-block"><h4>📘 Global venues</h4><p>${area.venues}</p></div>
        <div class="info-block"><h4>🏛️ Local dimension — UVT</h4><p>${area.local}</p></div>
      </div>
      <div class="card-expand-btn" data-area-id="${area.id}">
        <span class="expand-icon">ⓘ</span> Expand
      </div>
    </div>
  `;
  container.appendChild(card);
});

// Modal logic
const modal = document.getElementById("modal");
const modalContentDiv = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal(areaId) {
  const data = extendedData[areaId];
  if (!data) return;
  modalContentDiv.innerHTML = `
    <div class="modal-title">${data.title}</div>
    <div class="modal-section"><h4>🔍 Extended Open Problems</h4><p>${data.openProblemsExtended}</p></div>
    <div class="modal-section"><h4>🌟 More Influential People</h4><p>${data.peopleExtended}</p></div>
    <div class="modal-section"><h4>📍 UVT & Local Research</h4><p>${data.localExtended}</p></div>
    <div class="modal-section"><h4>🌐 Global & Collaborative Initiatives</h4><p>${data.globalExtended}</p></div>
  `;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

// Event delegation for expand buttons
document.addEventListener("click", (e) => {
  const expandBtn = e.target.closest(".card-expand-btn");
  if (expandBtn) {
    const areaId = expandBtn.getAttribute("data-area-id");
    openModal(areaId);
  }
});

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});