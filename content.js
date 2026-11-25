/*
 * ============================================================
 *  SITE CONTENT
 *  Everything shown on the website lives in this file.
 *  Edit the values below; you never need to touch index.html.
 *
 *  - Any text that starts with "[TODO: ...]" is highlighted on the
 *    page so you can spot it. Replace it with real content.
 *  - A link whose url is "" or a "[TODO: ...]" string is shown as
 *    plain text (not clickable), so it never becomes a broken link.
 *  - Keep the commas between items. A missing comma breaks the page.
 * ============================================================
 */

window.SITE = {
  person: {
    name: "Amir Arman Nejati",
    title: "B.Sc. Mechanical Engineering, Amirkabir University of Technology",
    location: "Tehran, Iran",
    // Put your photo in assets/img/ and write its path here, e.g. "assets/img/profile.jpg".
    // While this is "", a circle with your initials is shown instead.
    photo: "",
    status: "Seeking M.Sc. / Ph.D. positions for Fall 2027",
    bio: [
      "I am an undergraduate student in Mechanical Engineering at Amirkabir University of Technology (Tehran Polytechnic), ranked among the top ten students in my faculty. I am interested in fluid mechanics, heat transfer and energy conversion systems.",
      "In my coursework I have built CFD and finite-element models in Ansys and carried machine-design problems from hand calculations through to SolidWorks assemblies. In a summer internship at an engineering design company I worked on hydraulic calculations, line sizing and control-valve selection for an industrial fuel-oil system and a gas compressor station."
    ],
    links: [
      { label: "Email", url: "mailto:armannejati3264@gmail.com" },
      { label: "GitHub", url: "https://github.com/armannejati3264" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/Amir-arman-nejati" },
      { label: "Google Scholar", url: "[TODO: Google Scholar profile URL]" }
    ]
  },

  researchInterests: [
    "Fluid Mechanics",
    "Computational Fluid Dynamics (CFD)",
    "Heat Transfer & Fluid Flow Analysis",
    "Energy Conversion Systems & Thermodynamic Cycles",
    "Combustion & Its Applications in Energy Conversion",
    "Water Treatment & Desalination",
    "Process Engineering"
  ],

  education: [
    {
      institution: "Amirkabir University of Technology (Tehran Polytechnic)",
      degree: "B.Sc. in Mechanical Engineering",
      location: "Tehran, Iran",
      dates: "Sep 2023 – [TODO: expected graduation date]",
      details: [
        "GPA: 18.48 / 20",
        "Ranked among the top 10 students in the Faculty of Mechanical Engineering"
      ]
    }
  ],

  /*
   * PROJECTS
   * To add a project, copy one { ... } block, paste it at the top of the list
   * and change the values.
   *   type:  short label shown on the card, e.g. "Course project" or "Research"
   *   image: path to an image in assets/img/projects/ (leave "" for a neutral placeholder)
   *   links: any number of { label, url } pairs (GitHub, PDF report, slides ...)
   *          A PDF report goes in assets/docs/ and its url is "assets/docs/file-name.pdf".
   */
  projects: [
    {
      title: "Study on Thermal Barrier Coatings (TBC) and Their Applications in Turbines",
      type: "Research",
      context: "Materials Science course, Research Activity Certificate",
      date: "2024",
      description: "Led and co-authored a 50-page study of zirconia-based thermal barrier coatings (YSZ, doped La₂Zr₂O₇) for high-temperature use. Evaluated phase stability, thermal conductivity and failure mechanisms under thermal cycling through heat-transfer and stress–strain analysis, and presented the findings to the faculty.",
      tools: ["Literature review", "Heat transfer analysis", "Stress–strain analysis"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report (PDF)", url: "[TODO: link to report PDF or remove]" }]
    },
    {
      title: "Numerical Study of Airflow in a 2D Channel with Internal Obstacles",
      type: "Course project",
      context: "Fluid Mechanics II",
      date: "Dec 2025",
      description: "Built a CFD model of a two-dimensional channel with internal obstacles, covering mesh generation, boundary conditions and turbulence modeling. Analyzed velocity fields, pressure gradients and flow-separation patterns around the obstacles and channel walls.",
      tools: ["Ansys Fluent", "CFD", "Turbulence modeling"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report / GitHub", url: "[TODO: link to report PDF or GitHub repo]" }]
    },
    {
      title: "Industrial Gearbox Design",
      type: "Course project",
      context: "Machine Design II",
      date: "Jun 2026",
      description: "End-to-end design of an industrial gearbox: gear-train sizing, shaft design and bearing selection, with all calculations brought together in a fully modeled 3D assembly.",
      tools: ["SolidWorks", "Machine design"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report / GitHub", url: "[TODO: link to report PDF or GitHub repo]" }]
    },
    {
      title: "Bolted and Welded Structural Connections Design",
      type: "Course project",
      context: "Machine Design I",
      date: "Dec 2025",
      description: "Designed the bolted and welded connections of a mechanical lifting structure and calculated the safety factor and fatigue life of the component under cyclic loading.",
      tools: ["Fatigue analysis", "Machine design"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report / GitHub", url: "[TODO: link to report PDF or GitHub repo]" }]
    },
    {
      title: "Shaft Design",
      type: "Course project",
      context: "Machine Design I",
      date: "Nov 2025",
      description: "Complete design of a shaft: load and stress analysis, fatigue and deflection checks, then implementation of the final design in SolidWorks.",
      tools: ["SolidWorks", "Fatigue analysis"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report / GitHub", url: "[TODO: link to report PDF or GitHub repo]" }]
    },
    {
      title: "Structural Analysis Under Static Loading",
      type: "Course project",
      context: "Strength of Materials II",
      date: "May 2025",
      description: "Developed a finite-element model of a structure under static loading, defining boundary conditions and material properties to evaluate stress distribution, deformation and safety margins.",
      tools: ["Ansys", "FEA"],
      image: "",
      imageAlt: "",
      links: [{ label: "Report / GitHub", url: "[TODO: link to report PDF or GitHub repo]" }]
    }
  ],

  /*
   * PUBLICATIONS
   * While this list is empty the page shows "In preparation".
   * Example entry:
   * {
   *   authors: "A. A. Nejati, B. Author, C. Author",
   *   title: "Paper title",
   *   venue: "Journal or conference name",
   *   year: "2027",
   *   status: "Under review",          // optional: "Published", "Accepted", "Under review" ...
   *   links: [{ label: "DOI", url: "https://doi.org/..." }, { label: "PDF", url: "assets/docs/paper.pdf" }]
   * }
   */
  publications: [],
  publicationsEmptyText: "In preparation.",

  teaching: [
    {
      role: "Teaching Assistant, Materials Science",
      organization: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      dates: "Feb 2026 – Jul 2026",
      summary: "",
      details: [
        "Held review and problem-solving sessions for undergraduate students.",
        "Graded assignments for the course."
      ]
    }
  ],

  industry: [
    {
      role: "Mechanical Engineering Intern",
      organization: "Taravosh Jam Engineering Design Company",
      location: "Tehran, Iran",
      dates: "Jul 2026 – Sep 2026",
      summary: "Process engineering and hydraulic calculations for industrial fuel-oil and gas-compression projects.",
      details: [
        "Hydraulic analysis and pipe sizing (pressure drop, flow velocity, pipe diameter, pump head) for the fuel-oil (mazut) system serving industrial boilers at Haft Tappeh Sugarcane Company, based on P&IDs and design specifications; selected a bypass-line control valve using SAMSON software.",
        "Pressure-loss, flow-velocity and line-sizing calculations for the Dehloran Gas Compressor Station from PFD, P&ID and piping isometric drawings.",
        "Control-valve selection and sizing based on process conditions, valve characteristics and operating mechanisms.",
        "Supported engineering assessment of heat exchangers and pressure vessels against TEMA and ASME BPVC (including Section II for material selection).",
        "Prepared and reviewed engineering deliverables for the Haft Tappeh fuel-oil system."
      ]
    }
  ],

  honors: [
    {
      title: "Ranked 1,061 among 147,317 participants in Iran's National University Entrance Exam (Konkur), Mathematics & Physics group",
      year: ""
    },
    {
      title: "Top 10 students in the Faculty of Mechanical Engineering, Amirkabir University of Technology",
      year: ""
    },
    {
      title: "Research Activity Certificate for the study on Thermal Barrier Coatings",
      year: "2024"
    }
  ],

  skills: [
    { category: "Programming", items: ["Python", "MATLAB"] },
    { category: "Simulation / CFD / FEA", items: ["Ansys Fluent", "Ansys Workbench"] },
    { category: "CAD & Design", items: ["SolidWorks", "KISSsoft"] },
    { category: "Process Engineering", items: ["Hydraulic calculations & line sizing", "Control valve sizing (SAMSON)", "P&ID / PFD interpretation", "TEMA, ASME BPVC"] },
    { category: "Other", items: ["Machine learning", "Microsoft Word", "Microsoft Excel"] },
    { category: "Languages", items: ["English: professional working proficiency, IELTS [TODO: score (exam scheduled Jan 2027)]", "Persian: native"] }
  ],

  cv: {
    // Put your CV at assets/docs/CV.pdf (exact name) or change the path here.
    file: "assets/docs/CV.pdf",
    updated: "[TODO: month and year of the CV version]"
  },

  contact: {
    text: "I am looking for M.Sc. and Ph.D. positions starting in Fall 2027. The best way to reach me is by email.",
    items: [
      { label: "Email", value: "armannejati3264@gmail.com", url: "mailto:armannejati3264@gmail.com" },
      { label: "University email", value: "amarman.nej@aut.ac.ir", url: "mailto:amarman.nej@aut.ac.ir" },
      { label: "LinkedIn", value: "linkedin.com/in/Amir-arman-nejati", url: "https://www.linkedin.com/in/Amir-arman-nejati" },
      { label: "Location", value: "Tehran, Iran", url: "" }
    ]
  },

  lastUpdated: "November 2026"
};
