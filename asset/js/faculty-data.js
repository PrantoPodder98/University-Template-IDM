const facultyData = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Professor of Computer Science and Engineering",
    shortDepartment: "cse",
    department: "Computer Science and Engineering",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80",
    email: "s.johnson@nextgen.edu",
    phone: "+1 (234) 567-8901",
    office: "Room 202, Business Building",
    officeHours: "Tue-Thu 1-3 PM",
    about:
      "Dr. Sarah Johnson has a decade of experience in Strategic Management and Leadership studies, with notable research on corporate governance.",
    expertise: ["Strategic Management", "Leadership"],
    education: [
      {
        degree: "Ph.D. in Computer Science and Engineering",
        institution: "Harvard Business School",
        year: 2010,
      },
      {
        degree: "MSC.",
        institution: "Yale School of Engineering & Applied Science",
        year: 2006,
      },
    ],
    publications: [
      {
        title: "Leadership Strategies in Modern Corporations",
        journal: "Journal of Business Leadership",
        year: 2022,
        url: "#",
      },
      {
        title: "Innovations in Strategic Management",
        journal: "Harvard Business Review",
        year: 2021,
        url: "#",
      },
    ],
    courses: [
      {
        code: "BA501",
        name: "Advanced Strategic Management",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "BA305",
        name: "Leadership in Organizations",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Outstanding Research Award", year: 2022 },
      { name: "Best Teaching Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Associate Professor of Electrical and Electronic Engineering",
    shortDepartment: "eee",
    department: "Electrical and Electronic Engineering",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?w=800&q=80",
    email: "m.chen@nextgen.edu",
    phone: "+1 (234) 567-8902",
    office: "Room 405, Engineering Building",
    officeHours: "Mon-Wed 2-4 PM",
    about:
      "Dr. Michael Chen specializes in artificial intelligence and machine learning, with a focus on data science and its real-world applications.",
    expertise: ["AI & Machine Learning", "Data Science"],
    education: [
      { degree: "Ph.D. in Computer Science", institution: "MIT", year: 2012 },
      {
        degree: "M.S. in Computer Science",
        institution: "Stanford University",
        year: 2008,
      },
    ],
    publications: [
      {
        title: "AI and Data Science for Real-World Applications",
        journal: "IEEE AI Journal",
        year: 2023,
        url: "#",
      },
      {
        title: "Machine Learning for Data Mining",
        journal: "Data Science Quarterly",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "CSE401",
        name: "Advanced Machine Learning",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "CSE302",
        name: "Artificial Intelligence",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Excellence in AI Research", year: 2022 },
      { name: "Data Science Innovator Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "emma-davis",
    name: "Dr. Emma Davis",
    title: "Professor of Marketing",
    shortDepartment: "cse",
    department: "Computer Science and Engineering",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80",
    email: "e.davis@nextgen.edu",
    phone: "+1 (234) 567-8903",
    office: "Room 301, Business Building",
    officeHours: "Mon-Fri 11 AM - 1 PM",
    about:
      "Dr. Emma Davis is an expert in Software Enginnering and consumer behavior, with a strong focus on online advertising strategies.",
    expertise: ["Software Enginnering", "Consumer Behavior"],
    education: [
      {
        degree: "Ph.D. in Software Enginnering",
        institution: "Stanford University",
        year: 2013,
      },
      {
        degree: "M.S.C in Software Enginnering",
        institution: "University of California, Berkeley",
        year: 2009,
      },
    ],
    publications: [
      {
        title: "Consumer Behavior in the Digital Age",
        journal: "Marketing Science Journal",
        year: 2023,
        url: "#",
      },
      {
        title: "Online Advertising and Brand Loyalty",
        journal: "Journal of Digital Marketing",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "MKT301",
        name: "Digital Marketing",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
      {
        code: "MKT502",
        name: "Advanced Consumer Behavior",
        level: "Graduate",
        semester: "Fall 2024",
      },
    ],
    awards: [
      { name: "Best Marketing Professor Award", year: 2023 },
      { name: "Digital Marketing Innovation Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "sophia-martinez",
    name: "Dr. Sophia Martinez",
    title: "Assistant Professor of Physics",
    shortDepartment: "eee",
    department: "Electrical and Electronic Engineering",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    email: "s.martinez@nextgen.edu",
    phone: "+1 (234) 567-8904",
    office: "Room 108, Science Building",
    officeHours: "Tue-Fri 3-5 PM",
    about:
      "Dr. Sophia Martinez is an emerging researcher in quantum physics and nanotechnology, with groundbreaking work in material science.",
    expertise: ["Quantum Physics", "Nanotechnology"],
    education: [
      { degree: "Ph.D. in EEE", institution: "Caltech", year: 2016 },
      {
        degree: "B.S. in EEE",
        institution: "University of California, Berkeley",
        year: 2012,
      },
    ],
    publications: [
      {
        title: "Quantum Computing Advances",
        journal: "Journal of Quantum Physics",
        year: 2023,
        url: "#",
      },
      {
        title: "Nanotechnology in Material Science",
        journal: "NanoTech Journal",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "PHY401",
        name: "Quantum Mechanics",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "PHY202",
        name: "Introduction to Nanotechnology",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Young Scientist Award", year: 2023 },
      { name: "Breakthrough Research in Physics", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "robert-lee",
    name: "Dr. Robert Lee",
    title: "Professor of Economics",
    shortDepartment: "civil",
    department: "Civil Engineering",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    email: "r.lee@nextgen.edu",
    phone: "+1 (234) 567-8905",
    office: "Room 210, Humanities Building",
    officeHours: "Mon-Thu 10 AM - 12 PM",
    about:
      "Dr. Robert Lee is a renowned economist with expertise in macroeconomics and behavioral economics, focusing on global financial markets.",
    expertise: ["Macroeconomics", "Behavioral Economics"],
    education: [
      {
        degree: "Ph.D. in CIVIL Engineering",
        institution: "University of Chicago",
        year: 2005,
      },
      {
        degree: "M.S. in civil Engineering",
        institution: "London School of Economics",
        year: 2001,
      },
    ],
    publications: [
      {
        title: "Global Financial Markets and Behavioral Economics",
        journal: "Journal of Economic Theory",
        year: 2023,
        url: "#",
      },
      {
        title: "Macroeconomic Policies and Their Global Impact",
        journal: "Economics & Finance Review",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "ECO305",
        name: "Macroeconomics",
        level: "Undergraduate",
        semester: "Fall 2024",
      },
      {
        code: "ECO501",
        name: "Advanced Behavioral Economics",
        level: "Graduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Economic Research Award", year: 2022 },
      { name: "Global Financial Markets Scholar Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "olivia-wang",
    name: "Dr. Olivia Wang",
    title: "Professor of Biology",
    shortDepartment: "eee",
    department: "Electrical and Electronic Engineering",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    email: "o.wang@nextgen.edu",
    phone: "+1 (234) 567-8906",
    office: "Room 310, Science Building",
    officeHours: "Wed-Fri 11 AM - 1 PM",
    about:
      "Dr. Olivia Wang has made significant contributions to the field of EEE and CSE, particularly in the area of CSE.",
    expertise: ["CSE", "EEE"],
    education: [
      {
        degree: "Ph.D. in EEE",
        institution: "University of Oxford",
        year: 2011,
      },
      {
        degree: "M.S. in CSE",
        institution: "Harvard University",
        year: 2007,
      },
    ],
    publications: [
      {
        title: "Gene Regulation Mechanisms in Developmental Biology",
        journal: "Nature Genetics",
        year: 2023,
        url: "#",
      },
      {
        title: "Cell Biology and Disease Mechanisms",
        journal: "Journal of Molecular Biology",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "BIO301",
        name: "Genetics and Genomics",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
      {
        code: "BIO505",
        name: "Advanced Cell Biology",
        level: "Graduate",
        semester: "Fall 2024",
      },
    ],
    awards: [
      { name: "Excellence in Biological Research Award", year: 2022 },
      { name: "Innovator in Genetics Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "james-taylor",
    name: "Dr. James Taylor",
    title: "Associate Professor of Finance",
    shortDepartment: "cse",
    department: "Computer Science and Engineering",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80",
    email: "j.taylor@nextgen.edu",
    phone: "+1 (234) 567-8907",
    office: "Room 220, Business Building",
    officeHours: "Mon-Wed 9-11 AM",
    about:
      "Dr. James Taylor is an expert in corporate finance and investment banking with extensive experience advising major financial institutions.",
    expertise: ["Investment Banking", "Corporate Finance"],
    education: [
      {
        degree: "Ph.D. in CSE",
        institution: "London School of Economics",
        year: 2012,
      },
      {
        degree: "MSC",
        institution: "Wharton School, University of Pennsylvania",
        year: 2008,
      },
    ],
    publications: [
      {
        title: "Corporate Finance Strategies for Large Enterprises",
        journal: "Journal of Corporate Finance",
        year: 2023,
        url: "#",
      },
      {
        title: "Investment Banking in the Modern Economy",
        journal: "Harvard Business Review",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "FIN501",
        name: "Advanced Corporate Finance",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "FIN302",
        name: "Investment Banking Fundamentals",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Finance Research Excellence Award", year: 2022 },
      { name: "Top Finance Educator Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "aiden-patel",
    name: "Dr. Aiden Patel",
    title: "Professor of Electrical Engineering",
    shortDepartment: "archi",
    department: "Architecture",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80",
    email: "a.patel@nextgen.edu",
    phone: "+1 (234) 567-8908",
    office: "Room 504, Engineering Building",
    officeHours: "Tue-Thu 1-3 PM",
    about:
      "Dr. Aiden Patel's research focuses on microelectronics and embedded systems, with groundbreaking developments in semiconductor technology.",
    expertise: ["Microelectronics", "Embedded Systems"],
    education: [
      {
        degree: "Ph.D. in Electrical Engineering",
        institution: "UC Berkeley",
        year: 2010,
      },
      {
        degree: "M.S. in Electrical Engineering",
        institution: "University of Illinois",
        year: 2006,
      },
    ],
    publications: [
      {
        title: "Advances in Microelectronics for Smart Devices",
        journal: "IEEE Transactions on Electronics",
        year: 2023,
        url: "#",
      },
      {
        title: "Embedded Systems Design for the Internet of Things",
        journal: "Journal of Embedded Computing",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "EE401",
        name: "Advanced Microelectronics",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "EE203",
        name: "Introduction to Embedded Systems",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Innovation in Microelectronics Award", year: 2023 },
      { name: "Best Paper Award at IEEE Conference", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
  {
    id: "isabella-gomez",
    name: "Dr. Isabella Gomez",
    title: "Assistant Professor of Chemistry",
    shortDepartment: "archi",
    department: "Architecture",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    email: "i.gomez@nextgen.edu",
    phone: "+1 (234) 567-8909",
    office: "Room 310, Chemistry Building",
    officeHours: "Mon-Fri 12-2 PM",
    about:
      "Dr. Isabella Gomez's expertise lies in organic chemistry and chemical synthesis, with a focus on sustainable chemistry and green synthesis techniques.",
    expertise: ["Organic Architecture", "Chemical Synthesis"],
    education: [
      {
        degree: "Ph.D. in Architecture",
        institution: "Yale University",
        year: 2015,
      },
      {
        degree: "B.S. in Architecture",
        institution: "University of California, Berkeley",
        year: 2010,
      },
    ],
    publications: [
      {
        title: "Sustainable Architecture Synthesis Techniques",
        journal: "Journal of Organic Chemistry",
        year: 2023,
        url: "#",
      },
      {
        title: "Advances in Green Chemistry",
        journal: "Nature Chemistry",
        year: 2022,
        url: "#",
      },
    ],
    courses: [
      {
        code: "CHE401",
        name: "Organic Synthesis",
        level: "Graduate",
        semester: "Fall 2024",
      },
      {
        code: "CHE203",
        name: "Introduction to Organic Chemistry",
        level: "Undergraduate",
        semester: "Spring 2024",
      },
    ],
    awards: [
      { name: "Innovator in Chemistry Award", year: 2023 },
      { name: "Excellence in Chemical Research Award", year: 2021 },
    ],
    socialLinks: {
      whatsapp: "#",
      linkedin: "#",
      google: "#",
      twitter: "#",
    },
  },
];
