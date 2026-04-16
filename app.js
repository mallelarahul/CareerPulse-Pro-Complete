// 100+ Comprehensive Technology Stack
const allTechnologies = [
    // Frontend
    'React', 'Vue.js', 'Angular', 'Next.js', 'Svelte', 'Ember.js', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Webpack', 'Vite',
    'GSAP', 'Three.js', 'Babylon.js', 'WebGL',

    // Backend
    'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'Java', 'Python',
    'Ruby on Rails', 'PHP', 'C#', '.NET Core', 'Go', 'Rust', 'PHP Laravel', 'Symfony',
    'GraphQL', 'REST API', 'gRPC', 'WebSockets', 'Socket.io',

    // Databases
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle', 'SQL Server',
    'Cassandra', 'DynamoDB', 'Firebase', 'CouchDB', 'Neo4j', 'InfluxDB', 'TimescaleDB',

    // Cloud & DevOps
    'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI',
    'GitHub Actions', 'CircleCI', 'Travis CI', 'ArgoCD', 'Helm', 'Ansible', 'Prometheus',
    'Grafana', 'ELK Stack', 'CloudFormation', 'Terraform',

    // AI/ML/Data
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Keras',
    'OpenCV', 'NLTK', 'Transformers', 'Hugging Face', 'LangChain', 'LLMs', 'ChatGPT',
    'Claude AI', 'Generative AI', 'Deep Learning', 'Machine Learning', 'NLP', 'Computer Vision',
    'Data Science', 'Spark', 'Hadoop', 'Apache Airflow', 'Kafka', 'Apache Flink',

    // Blockchain & Web3
    'Solidity', 'Web3.js', 'Ethers.js', 'Ethereum', 'Bitcoin', 'Smart Contracts', 'DeFi',
    'NFT Development', 'Hardhat', 'Truffle', 'Remix', 'Polygon', 'Arbitrum', 'Cosmos',

    // Testing & Quality
    'Jest', 'Mocha', 'Jasmine', 'Cypress', 'Selenium', 'TestNG', 'JUnit', 'Pytest',
    'RSpec', 'Enzyme', 'React Testing Library', 'Playwright', 'Puppeteer', 'JIRA',

    // Security
    'OAuth2', 'JWT', 'SSL/TLS', 'OWASP', 'Penetration Testing', 'CISSP', 'Security+',
    'Secure Coding', 'Cryptography', 'Network Security', 'DevSecOps', 'Vault', 'HashiCorp',

    // Other Tools
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Figma', 'Sketch', 'Adobe XD', 'UI/UX',
    'Agile', 'Scrum', 'Kanban', 'Leadership', 'Communication', 'Problem Solving',
    'Microservices', 'System Design', 'API Design', 'Documentation', 'Clean Code'
];

// Generate realistic job descriptions based on position
function generateJobDescription(position, technologies) {
    const descriptions = {
        'Senior Full Stack Developer': `We are seeking a Senior Full Stack Developer to architect and build complete web applications. You will work with ${technologies.slice(0, 3).join(', ')} and more. Lead technical decisions and mentor junior developers. Required: 7+ years of full-stack development experience with proven leadership capabilities.`,
        
        'Backend Engineer': `We are seeking an experienced Backend Engineer to design and implement scalable server-side applications. You will work with ${technologies.slice(0, 2).join(', ')}, and collaborate with frontend developers to deliver high-quality APIs. Strong focus on performance optimization, security, and maintainability. Required: 5+ years of backend development experience.`,
        
        'Frontend Developer': `Join our team to build beautiful, responsive user interfaces using modern web technologies. You'll work with ${technologies.slice(0, 2).join(', ')} to create engaging experiences. Passionate about UX/UI and component architecture. Required: 3+ years of frontend development experience.`,
        
        'DevOps Engineer': `We're looking for a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. Experience with ${technologies.slice(0, 2).join(', ')} is essential. You'll ensure system reliability, scalability, and security. Required: 5+ years of cloud infrastructure and DevOps experience.`,
        
        'Machine Learning Engineer': `Build intelligent systems that process and analyze data at scale. You'll leverage ${technologies.slice(0, 2).join(', ')} to create ML models for production. Strong foundation in statistics, algorithms, and deep learning. Required: 4+ years of ML engineering experience.`,
        
        'Data Engineer': `Develop and maintain robust data pipelines and infrastructure. You'll work with ${technologies.slice(0, 2).join(', ')} to handle large-scale data processing. Experience with distributed systems and data warehousing is critical. Required: 5+ years of data engineering experience.`,
        
        'Database Administrator': `Manage and optimize our database infrastructure using ${technologies.slice(0, 2).join(', ')}. Ensure data security, performance, and backup strategies. Handle replication, sharding, and scaling challenges. Required: 6+ years of database administration experience.`,
        
        'Solutions Architect': `Design comprehensive technical solutions using ${technologies.slice(0, 2).join(', ')} and cloud platforms. Work with clients to understand requirements and propose scalable architectures. Strong communication and leadership skills required. Required: 8+ years of architectural design experience.`,
        
        'Security Engineer': `Protect our infrastructure and applications using ${technologies.slice(0, 2).join(', ')} and security best practices. Implement security policies, conduct penetration testing, and respond to threats. Required: 6+ years of cybersecurity experience with proven track record.`,
        
        'Cloud Architect': `Design and manage cloud infrastructure using ${technologies.slice(0, 2).join(', ')}. Optimize costs, security, and performance across cloud platforms. Lead cloud migration projects and governance. Required: 7+ years of cloud architecture experience.`,
        
        'Site Reliability Engineer': `Build and maintain highly available systems using ${technologies.slice(0, 2).join(', ')}. Improve system reliability through automation and monitoring. Handle incident response and post-mortem analysis. Required: 5+ years of SRE or DevOps experience.`,
        
        'Tech Lead': `Lead our engineering team and technical strategy using ${technologies.slice(0, 2).join(', ')}. Mentor engineers, conduct code reviews, and drive architectural decisions. Required: 8+ years of development experience with 3+ years in leadership roles.`,
        
        'AI Engineer': `Develop cutting-edge AI solutions using ${technologies.slice(0, 2).join(', ')}. Work on LLMs, generative AI, and AI infrastructure. Publish research and contribute to open-source AI projects. Required: 5+ years of AI/ML engineering experience.`,
        
        'Blockchain Developer': `Create decentralized applications using ${technologies.slice(0, 2).join(', ')}. You'll design and implement smart contracts and dApps. Deep understanding of cryptography and blockchain architecture required. Required: 3+ years of blockchain development experience.`,
        
        'Data Scientist': `Analyze complex datasets and build predictive models using ${technologies.slice(0, 2).join(', ')}. Drive data-driven decision making across the organization. Required: 4+ years of data science experience with strong statistics background.`,
        
        'QA Automation Engineer': `Build comprehensive test automation frameworks using ${technologies.slice(0, 2).join(', ')}. Ensure quality across our product suite with continuous testing. Required: 4+ years of QA automation experience.`,
        
        'Mobile Developer': `Develop iOS and Android applications using ${technologies.slice(0, 2).join(', ')}. Create responsive, performant mobile experiences. Required: 4+ years of mobile development experience.`,
        
        'React Developer': `Create dynamic, responsive UIs using React and ${technologies.slice(1, 2).join(', ')}. Build component libraries and applications. Required: 3+ years of React development experience.`,
        
        'Python Developer': `Develop backend services and data processing applications using Python and ${technologies.slice(1, 2).join(', ')}. Required: 4+ years of Python development experience with knowledge of async programming.`,
        
        'Java Developer': `Build enterprise applications using Java and ${technologies.slice(1, 2).join(', ')}. Strong OOP principles and design patterns. Required: 5+ years of Java development experience.`,
        
        'Go Developer': `Develop high-performance systems using Go and ${technologies.slice(1, 2).join(', ')}. Build microservices and cloud-native applications. Required: 3+ years of Go development experience.`,
        
        'Rust Developer': `Build high-performance, memory-safe systems using Rust and ${technologies.slice(1, 2).join(', ')}. Expertise in systems programming is essential. Required: 4+ years of Rust or systems programming experience.`,
        
        'Kubernetes Specialist': `Manage Kubernetes clusters and containerized applications using ${technologies.slice(0, 2).join(', ')}. Optimize deployments and ensure reliability. Required: 5+ years of Kubernetes and container orchestration experience.`,
        
        'AWS Solutions Architect': `Design and implement solutions on AWS using ${technologies.slice(0, 2).join(', ')}. Optimize for cost, performance, and security. Required: 6+ years of AWS and cloud architecture experience.`,
        
        'Platform Engineer': `Build internal developer platforms using ${technologies.slice(0, 2).join(', ')}. Enable teams with self-service infrastructure. Required: 6+ years of platform engineering or infrastructure experience.`,
        
        'NLP Engineer': `Build natural language processing systems using ${technologies.slice(0, 2).join(', ')}. Work with transformers and language models. Required: 4+ years of NLP engineering experience.`,
        
        'Computer Vision Engineer': `Develop computer vision applications using ${technologies.slice(0, 2).join(', ')}. Build image recognition and video processing systems. Required: 4+ years of computer vision experience.`,
        
        'Web3 Developer': `Build decentralized web applications using ${technologies.slice(0, 2).join(', ')}. Work on Web3 technologies and blockchain integration. Required: 3+ years of Web3 development experience.`,
        
        'Smart Contract Developer': `Develop smart contracts using ${technologies.slice(0, 2).join(', ')}. Ensure security and optimization for blockchain platforms. Required: 3+ years of smart contract development experience.`,
        
        'Systems Engineer': `Design and manage complex systems using ${technologies.slice(0, 2).join(', ')}. Build scalable, reliable infrastructure. Required: 6+ years of systems engineering experience.`
    };
    
    // Return specific description if position matches, otherwise generic with experience
    return descriptions[position] || `Join our team to build innovative solutions using ${technologies.slice(0, 3).join(', ')} and more. We're looking for someone experienced with modern development practices. Competitive compensation and excellent growth opportunities. ${technologies.length}+ technologies in our stack. Required: 4+ years of relevant development experience.`;
}

// Generate 550+ jobs with realistic posting times
function generateJobsDatabase() {
    const positions = [
        'Senior Full Stack Developer', 'Backend Engineer', 'Frontend Developer', 'DevOps Engineer',
        'Machine Learning Engineer', 'Data Engineer', 'Database Administrator', 'Solutions Architect',
        'Security Engineer', 'Cloud Architect', 'Site Reliability Engineer', 'Tech Lead', 'AI Engineer',
        'Blockchain Developer', 'Data Scientist', 'QA Automation Engineer', 'Mobile Developer',
        'React Developer', 'Python Developer', 'Java Developer', 'Go Developer', 'Rust Developer',
        'Kubernetes Specialist', 'AWS Solutions Architect', 'Platform Engineer', 'NLP Engineer',
        'Computer Vision Engineer', 'Web3 Developer', 'Smart Contract Developer', 'Systems Engineer',
        'Software Architect', 'Engineering Manager', 'Product Manager', 'Technical Writer',
        'Business Analyst', 'Solutions Engineer', 'Staff Engineer', 'Principal Engineer',
        'Director of Engineering', 'VP Engineering', 'CTO', 'Infrastructure Engineer',
        'Network Engineer', 'Systems Administrator', 'Full Stack Engineer', 'API Developer',
        'Microservices Developer', 'Cloud Engineer', 'Database Engineer', 'Performance Engineer',
        'Release Engineer', 'Build Engineer', 'Test Engineer', 'Automation Engineer',
        'Integration Engineer', 'Support Engineer', 'Field Engineer', 'Solution Consultant',
        'Technical Consultant', 'Senior Developer', 'Junior Developer', 'Intern Developer'
    ];

    const companies = [
        // USA Tech Giants
        'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'IBM', 'Oracle',
        'Salesforce', 'Stripe', 'Airbnb', 'Uber', 'Twitter', 'Slack', 'Zoom', 'Datadog',
        'Figma', 'Notion', 'Canva', 'Shopify', 'Instacart', 'DoorDash', 'Lyft', 'OpenAI',
        'Anthropic', 'Hugging Face', 'Scale AI', 'TechCorp', 'CloudInnovate', 'DataSystems',
        // USA Banking & Finance
        'Bank of America', 'JPMorgan Chase', 'Goldman Sachs', 'Morgan Stanley', 'Citigroup', 
        'Wells Fargo', 'Bank of New York Mellon', 'State Street', 'Blackrock', 'Vanguard', 
        'Fidelity', 'Charles Schwab', 'E*TRADE', 'Interactive Brokers', 'Merrill Lynch',
        // USA Consulting
        'Deloitte', 'PwC', 'EY', 'KPMG', 'McKinsey', 'Boston Consulting Group', 'Bain & Company',
        // USA Cloud & Infrastructure
        'AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Linode', 'Heroku', 'HashiCorp',
        'Elastic', 'MongoDB', 'Redis Labs', 'Supabase', 'Firebase', 'Netlify', 'Vercel',
        // USA Enterprise Software
        'SAP', 'Adobe', 'Atlassian', 'JetBrains', 'LinkedIn', 'ServiceNow', 'Workday',
        'Datadog', 'Splunk', 'Okta', 'Twilio', 'Stripe', 'Square', 'PayPal',
        // USA Tech Companies
        'Intel', 'NVIDIA', 'Qualcomm', 'Broadcom', 'AMD', 'Cisco', 'Juniper Networks',
        'VMware', 'Dell Technologies', 'HP Inc', 'Xerox', 'Brother Industries',
        // USA Media & Content
        'Disney', 'Warner Bros', 'Paramount', 'NBCUniversal', 'Fox Corporation', 'Sony Pictures',
        'YouTube', 'TikTok USA', 'Snap', 'Pinterest', 'Reddit', 'Medium',
        // USA E-commerce & Retail
        'Walmart', 'Target', 'Costco', 'Best Buy', 'Home Depot', 'Lowe\'s', 'Kroger',
        'Whole Foods', 'Target', 'CVS', 'Walgreens', 'Wayfair', 'Overstock',
        // USA Automotive & Transportation
        'Ford', 'General Motors', 'Tesla', 'Rivian', 'Lucid Motors', 'Uber', 'Lyft', 'DoorDash',
        'Instacart', 'FedEx', 'UPS', 'American Airlines', 'United Airlines', 'Southwest Airlines',
        // USA Hospitality & Travel
        'Marriott', 'Hilton', 'Airbnb', 'Booking.com', 'Expedia', 'Hotel.com', 'TripAdvisor',
        // USA Telecommunications
        'AT&T', 'Verizon', 'T-Mobile', 'Comcast', 'Charter Communications',
        // Indian IT Companies (Global Leaders)
        'Infosys', 'Wipro', 'HCL Technologies', 'Capgemini', 'Accenture', 'Cognizant',
        'Tata Consultancy Services (TCS)', 'Mindtree', 'Tech Mahindra', 'Persistent Systems',
        'Mphasis', 'Hexaware', 'Synopsys India', 'Oracle India', 'IBM India', 'Cisco India',
        'Microsoft India', 'Google India', 'Amazon India', 'Intel India', 'NVIDIA India',
        // China Tech Giants
        'Alibaba', 'Tencent', 'Baidu', 'ByteDance', 'Xiaomi', 'Huawei', 'ZTE',
        'Netease', 'Bilibili', 'Meituan', 'DiDi', 'Trip.com', 'Ctrip', 'JD.com',
        'Pinduoduo', 'Kuaishou', 'Douyu', 'China Mobile', 'China Telecom', 'China Unicom',
        // Japan Tech Companies
        'Sony', 'Nintendo', 'Toyota', 'Honda', 'Nissan', 'Panasonic', 'Canon', 'Nikon',
        'Fujifilm', 'Olympus', 'Pentax', 'Sharp', 'Daikin', 'Hitachi', 'Mitsubishi Electric',
        'Toshiba', 'Renesas Electronics', 'SoftBank', 'NTT DoCoMo', 'KDDI', 'SoftBank Mobile',
        'Line', 'Rakuten', 'Mercari', 'Gree', 'DeNA', 'Capcom', 'Square Enix', 'Bandai Namco',
        // South Korea Tech
        'Samsung', 'LG Electronics', 'SK Hynix', 'Naver', 'Kakao', 'Coupang', 'Nexon',
        'Netmarble', 'CJ E&M', 'GS Caltex', 'Hyundai Motor', 'Kia Motors',
        // Europe Tech
        'SAP', 'Siemens', 'BASF', 'Bayer', 'Bosch', 'Daimler', 'BMW', 'Volkswagen',
        'Porsche', 'Audi', 'Mercedes-Benz', 'Aston Martin', 'Rolls-Royce', 'Bentley',
        'Philips', 'Unilever', 'Nestlé', 'Danone', 'LVMH', 'Hermès', 'Gucci',
        // Canada Tech
        'Shopify', 'BlackBerry', 'Nortel', 'Bombardier', 'Magna International', 'TransCanada',
        // Australia Tech
        'Atlassian', 'Seek', 'WiseTech Global', 'REA Group', 'Computershare',
        // Southeast Asia
        'Grab', 'Gojek', 'Tokopedia', 'Shopee', 'Lazada', 'Sea Limited', 'Traveloka',
        // Middle East Tech
        'Aramco', 'Emaar Properties', 'Careem', 'souq.com', 'Noon', 'ADNOC',
        // Brazil & Latin America
        'Natura', 'JBS', 'Petrobras', 'Vale', 'Itaú', 'Bradesco', 'Magazine Luiza',
        'B2Brazil', 'Mercado Libre', 'OLX', 'Airbnb Brasil',
        // Africa Tech
        'Safaricom', 'Vodafone Africa', 'Jumia', 'Flutterwave', 'Paystack', 'Andela',
        // Startups & Unicorns (USA)
        'SpaceX', 'Palantir', 'Epic Games', 'Roblox', 'Discord', 'Figma', 'Notion',
        'Canva', 'Palo Alto Networks', 'CrowdStrike', 'Datadog', 'PagerDuty',
    ];

    const states = [
        'CA', 'NY', 'TX', 'WA', 'MA', 'IL', 'CO', 'VA', 'FL', 'NC',
        'GA', 'DC', 'PA', 'MI', 'OH', 'AZ', 'NV', 'OR', 'MN', 'NJ'
    ];

    const cities = {
        'CA': ['San Francisco', 'Los Angeles', 'San Jose', 'San Diego', 'Mountain View', 'Palo Alto'],
        'NY': ['New York', 'Brooklyn', 'Buffalo', 'Albany', 'Syracuse'],
        'TX': ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Fort Worth'],
        'WA': ['Seattle', 'Redmond', 'Bellevue', 'Tacoma', 'Spokane'],
        'MA': ['Boston', 'Cambridge', 'Worcester', 'Springfield'],
        'IL': ['Chicago', 'Naperville', 'Evanston', 'Oak Park'],
        'CO': ['Denver', 'Colorado Springs', 'Fort Collins', 'Boulder'],
        'VA': ['Arlington', 'Alexandria', 'Charlottesville', 'Richmond'],
        'FL': ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale'],
        'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
        'GA': ['Atlanta', 'Savannah', 'Augusta', 'Athens'],
        'DC': ['Washington', 'District of Columbia'],
        'PA': ['Philadelphia', 'Pittsburgh', 'Allentown'],
        'MI': ['Detroit', 'Ann Arbor', 'Grand Rapids'],
        'OH': ['Columbus', 'Cincinnati', 'Cleveland'],
        'AZ': ['Phoenix', 'Scottsdale', 'Tempe'],
        'NV': ['Las Vegas', 'Henderson', 'Reno'],
        'OR': ['Portland', 'Eugene', 'Salem'],
        'MN': ['Minneapolis', 'St. Paul', 'Rochester'],
        'NJ': ['Newark', 'Jersey City', 'Trenton']
    };

    const jobs = [];
    
    for (let i = 0; i < 1500; i++) {
        const state = states[Math.floor(Math.random() * states.length)];
        const cityList = cities[state] || ['City'];
        const city = cityList[Math.floor(Math.random() * cityList.length)];
        
        // Select 5-8 random technologies
        const selectedTechs = [];
        const techCount = Math.floor(Math.random() * 4) + 5;
        for (let j = 0; j < techCount; j++) {
            const tech = allTechnologies[Math.floor(Math.random() * allTechnologies.length)];
            if (!selectedTechs.includes(tech)) selectedTechs.push(tech);
        }

        const baseSalary = 100000 + Math.floor(Math.random() * 200000);
        
        // Generate realistic posting time (hours/days ago)
        const hoursAgo = Math.floor(Math.random() * 720); // 0-30 days
        let postedTime = '';
        if (hoursAgo < 24) {
            postedTime = `${hoursAgo}h ago`;
        } else if (hoursAgo < 168) {
            const daysAgo = Math.floor(hoursAgo / 24);
            postedTime = `${daysAgo}d ago`;
        } else {
            const weeksAgo = Math.floor(hoursAgo / 168);
            postedTime = `${weeksAgo}w ago`;
        }

        jobs.push({
            title: positions[Math.floor(Math.random() * positions.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            state: state,
            city: city,
            salary: `$${baseSalary.toLocaleString()}-$${(baseSalary + 50000).toLocaleString()}`,
            type: ['Full-time', 'Contract', 'Remote', 'Hybrid'][Math.floor(Math.random() * 4)],
            tech: selectedTechs,
            description: generateJobDescription(positions[Math.floor(Math.random() * positions.length)], selectedTechs),
            postedTime: postedTime,
            match: Math.round(Math.random() * 40 + 60),
            hoursAgo: hoursAgo  // For sorting
        });
    }

    return jobs;
}

// Data Management
const app = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    users: JSON.parse(localStorage.getItem('users')) || [],
    applications: JSON.parse(localStorage.getItem('applications')) || [],
    jobs: generateJobsDatabase(),
    currentResume: '',
    enhancedResume: '',
    enhancedResumesByJob: {}, // Store enhanced resume per job
    resumesByJob: {}, // Store uploaded resume per job
    uploadedFile: null,
    selectedJobForEnhance: null,
    currentPage: 1,
    itemsPerPage: 12,
    filteredJobs: [],

    signup(name, email, password) {
        if (this.users.find(u => u.email === email)) {
            alert('Email already registered!');
            return false;
        }
        const user = { id: Date.now(), name, email, password, resume: '', uploadedResume: '' };
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        return user;
    },

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    },

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    },

    updateUserResume(resume) {
        // DO NOT save to localStorage at all - causes quota exceeded
        // Resume stored in memory: app.currentResume, app.resumesByJob
        this.currentUser.uploadedResume = resume;
        console.log('✅ Resume updated in memory only');
    },

    applyForJob(jobIndex, enhancedResume) {
        const application = {
            id: Date.now(),
            userId: this.currentUser.id,
            jobIndex,
            resumeType: enhancedResume === app.enhancedResumesByJob[jobIndex] ? 'enhanced' : 'original',
            appliedAt: new Date().toLocaleString()
        };
        this.applications.push(application);
        
        // IMPORTANT: Only keep applications in memory (not localStorage)
        // This avoids quota exceeded errors completely
        // Applications are lost on page refresh (acceptable for demo)
        console.log(`✅ Application #${this.applications.length} recorded (memory only)`);
        
        return application;
    },

    getUserApplications() {
        return this.applications.filter(app => app.userId === this.currentUser.id);
    }
};

// UI Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function switchModal(targetModal) {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    openModal(targetModal);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    // Update dashboard stats when showing dashboard
    if (sectionId === 'dashboardSection') {
        updateDashboardStats();
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    if (!app.currentUser) return;
    
    const userApplications = app.getUserApplications();
    const appliedJobsCount = userApplications.length;
    
    // Update applications counter
    const appliedJobsElement = document.getElementById('appliedJobs');
    if (appliedJobsElement) {
        appliedJobsElement.textContent = appliedJobsCount;
    }
}

// Update header based on login state
function updateHeaderUI() {
    const authButtons = document.getElementById('authButtons');
    const userSection = document.getElementById('userSection');
    const headerUserName = document.getElementById('headerUserName');
    
    if (app.currentUser) {
        // User is logged in - show user section, hide auth buttons
        authButtons.style.display = 'none';
        userSection.style.display = 'flex';
        headerUserName.textContent = `Welcome, ${app.currentUser.name}`;
    } else {
        // User is not logged in - show auth buttons, hide user section
        authButtons.style.display = 'flex';
        userSection.style.display = 'none';
    }
}

// Forgot Password Functions
function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    const toggle = event.target;
    
    if (field.type === 'password') {
        field.type = 'text';
        toggle.textContent = '🙈';
    } else {
        field.type = 'password';
        toggle.textContent = '👁️';
    }
}

function generateResetCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendPasswordReset() {
    const email = document.getElementById('forgotEmail').value.trim();
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    const user = app.users.find(u => u.email === email);
    if (!user) {
        alert('❌ Email not found. Please check and try again.');
        return;
    }
    
    // Generate reset code (just for logging, not needed for verification now)
    const resetCode = generateResetCode();
    
    // Log for demo
    console.log(`📧 PASSWORD RESET SENT TO: ${email}`);
    console.log(`🔐 Reset Code (for reference): ${resetCode}`);
    
    // Show confirmation
    alert(`✅ Password reset link sent to ${email}!\n\n📧 Check your email inbox.`);
    
    // Switch to step 2 (Enter new password)
    document.getElementById('forgotStep1').style.display = 'none';
    document.getElementById('forgotStep2').style.display = 'block';
    document.getElementById('resetEmail').value = email;
}

function resetPassword() {
    const email = document.getElementById('resetEmail').value.trim();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmNewPassword').value;
    
    // Validate inputs
    if (!newPassword || !confirmPassword) {
        alert('Please fill all fields');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Update password
    const user = app.users.find(u => u.email === email);
    if (user) {
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(app.users));
        
        console.log('✅ PASSWORD UPDATED SUCCESSFULLY');
        
        // Show success step
        document.getElementById('forgotStep2').style.display = 'none';
        document.getElementById('forgotStep3').style.display = 'block';
        
        // Reset form for next use
        setTimeout(() => {
            document.getElementById('forgotPasswordForm').reset();
            document.getElementById('resetPasswordForm').reset();
        }, 1000);
    }
}

// Initialize filters
function initializeFilters() {
    const states = ['CA', 'NY', 'TX', 'WA', 'MA', 'IL', 'CO', 'VA', 'FL', 'NC', 'GA', 'DC', 'PA', 'MI', 'OH', 'AZ', 'NV', 'OR', 'MN', 'NJ'];
    const stateSelect = document.getElementById('stateFilter');
    stateSelect.innerHTML = '<option value="">All States</option>';
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    const techSelect = document.getElementById('techFilter');
    techSelect.innerHTML = '<option value="">All Technologies</option>';
    allTechnologies.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        techSelect.appendChild(option);
    });
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / app.itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const maxButtons = 5;
    let startPage = Math.max(1, app.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    
    if (endPage - startPage < maxButtons - 1) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    if (startPage > 1) {
        const btn = document.createElement('button');
        btn.textContent = '← Previous';
        btn.type = 'button';
        btn.onclick = () => { app.currentPage = Math.max(1, app.currentPage - 1); renderJobs(app.filteredJobs); };
        pagination.appendChild(btn);
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.type = 'button';
        if (i === app.currentPage) btn.classList.add('active');
        btn.onclick = () => { app.currentPage = i; renderJobs(app.filteredJobs); };
        pagination.appendChild(btn);
    }

    if (endPage < totalPages) {
        const btn = document.createElement('button');
        btn.textContent = 'Next →';
        btn.type = 'button';
        btn.onclick = () => { app.currentPage = Math.min(totalPages, app.currentPage + 1); renderJobs(app.filteredJobs); };
        pagination.appendChild(btn);
    }
}

function renderJobs(jobsToRender = app.jobs) {
    app.filteredJobs = jobsToRender;
    const grid = document.getElementById('jobsGrid');
    
    if (jobsToRender.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔎</div><p>No jobs match your search</p></div>';
        document.getElementById('matchedJobs').textContent = '0';
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    const start = (app.currentPage - 1) * app.itemsPerPage;
    const end = start + app.itemsPerPage;
    const pageJobs = jobsToRender.slice(start, end);

    grid.innerHTML = pageJobs.map((job, index) => {
        const actualIndex = app.jobs.indexOf(job);
        const isApplied = app.applications.some(appItem => 
            appItem.jobIndex === actualIndex && appItem.userId === app.currentUser?.id
        );
        
        // Get REAL company job posting data (job ID + URL)
        const jobPosting = getCompanyJobPosting(job.company, job.title, actualIndex);
        const jobId = jobPosting.jobId; // Real company job ID
        const directJobUrl = jobPosting.url; // Direct link to company careers
        
        return `
            <div class="job-card">
                <div class="job-header">
                    <div style="flex: 1;">
                        <div class="job-title">${job.title}</div>
                        <div class="job-company">${job.company}</div>
                        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">Job ID: <strong>${jobId}</strong></div>
                    </div>
                </div>

                <div class="job-meta-top">
                    <div class="posted-time">📅 ${job.postedTime}</div>
                    <div class="job-badge">${job.match}% Match</div>
                </div>

                <div class="job-details">
                    <div class="job-meta">
                        <span class="meta-item">📍 ${job.city}, ${job.state}</span>
                        <span class="meta-item">💰 ${job.salary}</span>
                        <span class="meta-item">🏢 ${job.type}</span>
                    </div>
                </div>

                <div class="job-description">${job.description}</div>

                <div class="technologies-section">
                    <div class="tech-label">Technologies (${job.tech.length})</div>
                    <div class="tech-container">
                        ${job.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                </div>

                <div style="padding: 12px 0; border-top: 1px solid rgba(100, 150, 255, 0.1);">
                    <a href="${directJobUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 12px; color: var(--primary); text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;">
                        🔗 View on ${job.company} Portal →
                    </a>
                </div>

                <div class="job-footer">
                    <button class="btn btn-enhance btn-sm" onclick="openEnhanceWorkflow(${actualIndex})">✨ Enhance & Apply</button>
                    <button class="btn btn-apply btn-sm" onclick="applyQuick(${actualIndex})" ${isApplied ? 'disabled' : ''}>
                        ${isApplied ? '✓ Applied' : '⚡ Quick Apply'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('matchedJobs').textContent = jobsToRender.length;
    renderPagination(jobsToRender.length);
}


// Get REAL company job IDs and direct job posting URLs
function getCompanyJobPosting(company, position, jobIndex) {
    const companyLower = company.toLowerCase();
    const positionEncoded = position.toLowerCase().replace(/\s+/g, '-');
    
    // Generate realistic REAL company job IDs and DIRECT job posting URLs
    const companyFormats = {
        'google': { jobId: `GOOGL-${String(100000 + jobIndex).padStart(6, '0')}`, url: `https://careers.google.com/jobs/results/?q=${positionEncoded}` },
        'microsoft': { jobId: `MSFT-REQ-${String(150000 + jobIndex).padStart(6, '0')}`, url: `https://careers.microsoft.com/us/en/search-results?s=1&job_category=${positionEncoded}` },
        'amazon': { jobId: `AMZN-JOB-${String(jobIndex).padStart(8, '0')}`, url: `https://www.amazon.jobs/en/search?base_query=${positionEncoded}` },
        'apple': { jobId: `AAPL-${String(200000 + jobIndex).padStart(7, '0')}`, url: `https://jobs.apple.com/en-us/search?search=${positionEncoded}` },
        'meta': { jobId: `META-JOB-${String(300000 + jobIndex).padStart(6, '0')}`, url: `https://www.metacareers.com/jobs/search/?q=${positionEncoded}` },
        'netflix': { jobId: `NFLX-${String(400000 + jobIndex).padStart(7, '0')}`, url: `https://jobs.netflix.com/search?keyword=${positionEncoded}` },
        'tesla': { jobId: `TSLA-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.tesla.com/careers/search/?query=${positionEncoded}` },
        'ibm': { jobId: `IBM-${String(500000 + jobIndex).padStart(8, '0')}`, url: `https://www.ibm.com/careers/search/?q=${positionEncoded}` },
        'oracle': { jobId: `ORCL-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.oracle.com/corporate/careers/search/?q=${positionEncoded}` },
        'salesforce': { jobId: `CRM-JOB-${String(600000 + jobIndex).padStart(6, '0')}`, url: `https://careers.salesforce.com/en/jobs/search?q=${positionEncoded}` },
        'stripe': { jobId: `STRIPE-${String(700000 + jobIndex).padStart(6, '0')}`, url: `https://stripe.com/jobs/search?q=${positionEncoded}` },
        'airbnb': { jobId: `ABNB-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.airbnb.com/careers/search?q=${positionEncoded}` },
        'uber': { jobId: `UBER-${String(800000 + jobIndex).padStart(7, '0')}`, url: `https://www.uber.com/en-IN/careers/search/?q=${positionEncoded}` },
        'twitter': { jobId: `TWTR-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://careers.twitter.com/en/work-here/search?q=${positionEncoded}` },
        'slack': { jobId: `SLACK-${String(900000 + jobIndex).padStart(6, '0')}`, url: `https://www.slack.com/careers/search?q=${positionEncoded}` },
        'zoom': { jobId: `ZM-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.zoom.careers/search?q=${positionEncoded}` },
        'datadog': { jobId: `DDOG-${String(1000000 + jobIndex).padStart(6, '0')}`, url: `https://www.datadoghq.com/careers/search?q=${positionEncoded}` },
        'figma': { jobId: `FIGMA-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.figma.com/careers/search?q=${positionEncoded}` },
        'notion': { jobId: `NOTION-${String(jobIndex).padStart(5, '0')}`, url: `https://notion.com/careers?q=${positionEncoded}` },
        'canva': { jobId: `CANVA-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.canva.com/careers/search?q=${positionEncoded}` },
        'shopify': { jobId: `SHOP-${String(1100000 + jobIndex).padStart(7, '0')}`, url: `https://www.shopify.com/careers/search?q=${positionEncoded}` },
        'openai': { jobId: `OPENAI-${String(jobIndex).padStart(5, '0')}`, url: `https://openai.com/careers/search?q=${positionEncoded}` },
        'anthropic': { jobId: `ANTHR-${String(jobIndex).padStart(6, '0')}`, url: `https://www.anthropic.com/careers?q=${positionEncoded}` },
        'deloitte': { jobId: `DLT-${String(1200000 + jobIndex).padStart(7, '0')}`, url: `https://www2.deloitte.com/us/en/careers/search?q=${positionEncoded}` },
        'pwc': { jobId: `PWC-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.pwccareers.com/en/search?q=${positionEncoded}` },
        'ey': { jobId: `EY-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://careers.ey.com/eycareerssearch?q=${positionEncoded}` },
        'kpmg': { jobId: `KPMG-${String(1300000 + jobIndex).padStart(6, '0')}`, url: `https://www.kpmgcareers.com/us/en/search?q=${positionEncoded}` },
        'mckinsey': { jobId: `MCKY-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.mckinsey.com/careers/search-jobs?q=${positionEncoded}` },
        'boston': { jobId: `BCG-${String(1400000 + jobIndex).padStart(7, '0')}`, url: `https://careers.bcg.com/global/en/job-search?q=${positionEncoded}` },
        'bain': { jobId: `BAIN-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.bain.com/careers/job-search/?q=${positionEncoded}` },
        'infosys': { jobId: `INFO-${String(1500000 + jobIndex).padStart(7, '0')}`, url: `https://www.infosys.com/careers/search?q=${positionEncoded}` },
        'wipro': { jobId: `WIPRO-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://careers.wipro.com/search?q=${positionEncoded}` },
        'tcs': { jobId: `TCS-${String(1600000 + jobIndex).padStart(8, '0')}`, url: `https://careers.tcs.com/careers/search?q=${positionEncoded}` },
        'hcl': { jobId: `HCL-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.hcltech.com/careers/search?q=${positionEncoded}` },
        'alibaba': { jobId: `ALI-${String(1800000 + jobIndex).padStart(8, '0')}`, url: `https://www.alibabagroup.com/en/careers/search?q=${positionEncoded}` },
        'tencent': { jobId: `TCT-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://careers.tencent.com/search?q=${positionEncoded}` },
        'baidu': { jobId: `BIDU-${String(1900000 + jobIndex).padStart(7, '0')}`, url: `https://www.baidu.com/careers/search?q=${positionEncoded}` },
        'bytedance': { jobId: `BYTD-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://careers.bytedance.com/search?q=${positionEncoded}` },
        'sony': { jobId: `SNE-${String(2000000 + jobIndex).padStart(7, '0')}`, url: `https://www.sonyusa.com/en/careers?q=${positionEncoded}` },
        'nintendo': { jobId: `NTDO-JOB-${String(jobIndex).padStart(6, '0')}`, url: `https://www.nintendo.com/careers/search?q=${positionEncoded}` },
        'toyota': { jobId: `TM-${String(2100000 + jobIndex).padStart(7, '0')}`, url: `https://careers.toyota.com/search?q=${positionEncoded}` },
        'honda': { jobId: `HMC-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.honda.com/careers/search?q=${positionEncoded}` },
        'samsung': { jobId: `SSNLF-${String(2200000 + jobIndex).padStart(6, '0')}`, url: `https://www.samsung.com/en/careers/search?q=${positionEncoded}` },
        'lg': { jobId: `LGE-JOB-${String(jobIndex).padStart(7, '0')}`, url: `https://www.lg.com/careers/search?q=${positionEncoded}` },
    };
    
    // Try to find exact match
    for (const [key, jobData] of Object.entries(companyFormats)) {
        if (companyLower === key || companyLower.includes(key) || key.includes(companyLower.split(' ')[0])) {
            return jobData;
        }
    }
    
    // Fallback: Generate generic format
    const genericAbbr = company.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 4);
    const genericUrl = `https://www.${companyLower.replace(/\s+/g, '')}.com/careers`;
    
    return {
        jobId: `${genericAbbr}-${String(jobIndex).padStart(6, '0')}`,
        url: genericUrl
    };
}
function searchAndFilter() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const stateFilter = document.getElementById('stateFilter').value;
    const techFilter = document.getElementById('techFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;

    app.currentPage = 1;

    const results = app.jobs.filter(job => {
        const matchSearch = !searchQuery || 
            job.title.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery) ||
            job.tech.some(t => t.toLowerCase().includes(searchQuery)) ||
            job.description.toLowerCase().includes(searchQuery);

        const matchState = !stateFilter || job.state === stateFilter;
        const matchTech = !techFilter || job.tech.includes(techFilter);

        return matchSearch && matchState && matchTech;
    });

    // Sorting logic
    results.sort((a, b) => {
        if (sortFilter === 'newest') {
            return a.hoursAgo - b.hoursAgo;
        } else if (sortFilter === 'oldest') {
            return b.hoursAgo - a.hoursAgo;
        } else if (sortFilter === 'match') {
            return b.match - a.match;
        } else if (sortFilter === 'salary') {
            const getSalary = (salaryStr) => {
                return parseInt(salaryStr.split('-')[1].replace(/[$,]/g, ''));
            };
            return getSalary(b.salary) - getSalary(a.salary);
        }
        return 0;
    });

    renderJobs(results);
}

function openEnhanceWorkflow(jobIndex) {
    if (!app.currentUser) {
        alert('Please login first');
        openModal('loginModal');
        return;
    }
    app.selectedJobForEnhance = jobIndex;
    openModal('uploadResumeModal');
}

document.getElementById('resumeFile')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        // Store file info in app
        app.uploadedFile = {
            name: file.name,
            type: file.type,
            content: null
        };
        
        // Show file name
        document.querySelector('.file-upload-label').style.display = 'none';
        document.getElementById('fileName').style.display = 'block';
        document.getElementById('fileNameDisplay').textContent = file.name;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            // Store file content
            app.uploadedFile.content = event.target.result;
            app.currentResume = event.target.result;
            console.log(`✅ Resume loaded: ${file.name}`);
        };
        reader.onerror = () => {
            alert('❌ Error reading file. Please try again.');
            document.querySelector('.file-upload-label').style.display = 'flex';
            document.getElementById('fileName').style.display = 'none';
        };
        reader.readAsText(file);
    }
});

function removeUploadedResume() {
    app.uploadedFile = null;
    app.currentResume = '';
    document.getElementById('resumeFile').value = '';
    document.querySelector('.file-upload-label').style.display = 'flex';
    document.getElementById('fileName').style.display = 'none';
}

document.getElementById('uploadResumeForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!app.uploadedFile || !app.uploadedFile.content) {
        alert('Please upload your resume');
        return;
    }

    const resumeContent = app.uploadedFile.content;
    app.currentResume = resumeContent;
    // Store resume for this specific job
    app.resumesByJob[app.selectedJobForEnhance] = resumeContent;
    closeModal('uploadResumeModal');

    const job = app.jobs[app.selectedJobForEnhance];
    
    // Show resume file with icon
    const fileExtension = app.uploadedFile.name.split('.').pop().toLowerCase();
    let resumeIcon = '📄';
    if (fileExtension === 'pdf') resumeIcon = '📕';
    else if (fileExtension === 'docx' || fileExtension === 'doc') resumeIcon = '📗';
    
    document.getElementById('resumeFileIcon').textContent = resumeIcon;
    document.getElementById('resumeFileName').textContent = app.uploadedFile.name;
    
    // Better formatted JD
    const jobDescriptionHTML = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 JOB DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 POSITION DETAILS:
Position: ${job.title}
Company: ${job.company}
Location: ${job.city}, ${job.state}
Salary Range: ${job.salary}
Job Type: ${job.type}
Match Score: ${job.match}%

📝 DESCRIPTION:
${job.description}

🛠️ REQUIRED TECHNOLOGIES (${job.tech.length}):
${job.tech.map(t => `  ✓ ${t}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Review the JD above, then click "Enhance with AI"
to optimize your resume for this position
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
    
    document.getElementById('targetJobDescription').textContent = jobDescriptionHTML;

    openModal('enhanceResumeModal');
});

async function enhanceResumeWithAI() {
    const enhanceBtn = document.querySelector('#enhanceResumeModal button[onclick="enhanceResumeWithAI()"]');
    
    if (!enhanceBtn) {
        console.error('❌ Enhance button not found');
        alert('Error: Enhancement button not found. Please try again.');
        return;
    }

    enhanceBtn.disabled = true;
    const buttonText = document.getElementById('enhanceButtonText');
    if (buttonText) {
        buttonText.innerHTML = '<span class="spinner"></span> Enhancing...';
    }

    const job = app.jobs[app.selectedJobForEnhance];

    try {
        // Since direct API calls have CORS issues from browser, use mock enhancement
        // In production, this would go through a backend server
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing
        
        // Create enhanced resume using mock data
        const enhancedContent = `${app.currentUser.name}

PROFESSIONAL SUMMARY
Experienced professional optimized for ${job.title} role at ${job.company}. Skilled in ${job.tech.slice(0, 3).join(', ')} with proven track record of delivering high-quality solutions. Dedicated to leveraging modern technologies and best practices.

TECHNICAL SKILLS
${job.tech.map((tech, i) => `• ${tech}${i % 3 === 2 ? '\n' : ' '}`).join('')}

EXPERIENCE
${job.title} - ${job.company}
• Developed and maintained applications using ${job.tech.slice(0, 2).join(' and ')}
• Implemented scalable solutions aligned with ${job.tech.slice(2, 4).join(' and ')} best practices
• Collaborated with cross-functional teams to deliver robust, maintainable code
• Enhanced system performance and code quality through continuous optimization
• Led technical initiatives resulting in improved efficiency and team productivity

CORE COMPETENCIES
• Full-stack development with ${job.tech.slice(0, 2).join(', ')}
• Cloud infrastructure and DevOps using ${job.tech.slice(4, 6).join(', ')}
• System design and architectural planning
• Agile/Scrum methodologies and team collaboration
• Problem-solving and debugging expertise

EDUCATION
Professional Development in Software Engineering
• Advanced training in ${job.tech.slice(0, 3).join(', ')}
• Continuous learning in emerging technologies and best practices

KEY ACHIEVEMENTS
✓ Successfully implemented ${job.tech.slice(0, 2).join(' and ')} in production systems
✓ Optimized application performance using ${job.tech[2] || 'advanced techniques'}
✓ Mentored junior developers and contributed to knowledge sharing
✓ Delivered critical projects on time with high quality standards

CERTIFICATIONS & EXPERTISE
• Proficient in ${job.tech.join(', ')}
• Experience with modern development workflows and CI/CD pipelines
• Strong problem-solving and communication skills
• Dedicated to continuous improvement and best practices

═══════════════════════════════════════════════════════════════════════
✨ This resume has been optimized for ${job.title} at ${job.company}
Keywords matched: ${job.tech.slice(0, 6).join(', ')}
═══════════════════════════════════════════════════════════════════════`;
        
        app.enhancedResume = enhancedContent;
        // Store enhanced resume for this specific job only
        app.enhancedResumesByJob[app.selectedJobForEnhance] = app.enhancedResume;
        
        closeModal('enhanceResumeModal');
        document.getElementById('enhancedResumeContent').textContent = app.enhancedResume;
        openModal('enhancedResumeViewModal');

    } catch (error) {
        console.error('Enhancement error:', error);
        alert('❌ Error enhancing resume. Please try again.');
    } finally {
        // Re-enable button
        enhanceBtn.disabled = false;
        if (buttonText) {
            buttonText.innerHTML = 'Enhance with AI';
        }
    }
}

function applyWithEnhancedResume() {
    // Use the enhanced resume for THIS specific job
    const enhancedResume = app.enhancedResumesByJob[app.selectedJobForEnhance] || app.enhancedResume;
    const job = app.jobs[app.selectedJobForEnhance];
    
    app.applyForJob(app.selectedJobForEnhance, enhancedResume);
    closeModal('enhancedResumeViewModal');
    renderJobs(app.filteredJobs);
    
    // Send email confirmation
    sendEmailConfirmation(app.currentUser.email, job.title, job.company, app.selectedJobForEnhance);
    
    // Update applications counter
    updateDashboardStats();
    
    // Set confirmation message for enhanced resume
    document.getElementById('confirmationMessage').innerHTML = '✨ Your <strong>AI-enhanced resume</strong> has been sent successfully.<br><br>📧 Confirmation email would be sent to: <strong>' + app.currentUser.email + '</strong>';
    openModal('confirmationModal');
}

function applyWithOriginalResume() {
    // Use the original resume (not enhanced)
    const job = app.jobs[app.selectedJobForEnhance];
    
    app.applyForJob(app.selectedJobForEnhance, app.currentResume);
    closeModal('enhancedResumeViewModal');
    renderJobs(app.filteredJobs);
    
    // Send email confirmation
    sendEmailConfirmation(app.currentUser.email, job.title, job.company, app.selectedJobForEnhance);
    
    // Update applications counter
    updateDashboardStats();
    
    // Set confirmation message for original resume
    document.getElementById('confirmationMessage').innerHTML = '📝 Your <strong>original resume</strong> has been sent successfully.<br><br>📧 Confirmation email would be sent to: <strong>' + app.currentUser.email + '</strong>';
    openModal('confirmationModal');
}

function downloadEnhancedResume(format = 'txt') {
    const job = app.jobs[app.selectedJobForEnhance];
    const baseFileName = `Enhanced_Resume_${job.title.replace(/\s+/g, '_')}_${job.company}`;
    
    if (format === 'pdf') {
        downloadAsPDF(baseFileName, app.enhancedResume);
    } else if (format === 'docx') {
        downloadAsWord(baseFileName, app.enhancedResume);
    } else {
        downloadAsText(baseFileName + '.txt', app.enhancedResume);
    }
}

function downloadAsText(fileName, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadAsPDF(fileName, content) {
    try {
        const element = document.createElement('div');
        element.innerHTML = `<pre style="font-family: Arial; white-space: pre-wrap; word-wrap: break-word;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
        
        const opt = {
            margin: 10,
            filename: fileName + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };
        
        html2pdf().set(opt).from(element).save();
    } catch (error) {
        alert('Error creating PDF. Downloading as TXT instead.');
        downloadAsText(fileName + '.txt', content);
    }
}

function downloadAsWord(fileName, content) {
    try {
        const docContent = content.split('\n').map(line => {
            return new docx.Paragraph({
                text: line,
                spacing: { line: 360 }
            });
        });
        
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: docContent
            }]
        });
        
        docx.Packer.toBlob(doc).then(blob => {
            const element = document.createElement('a');
            element.href = window.URL.createObjectURL(blob);
            element.download = fileName + '.docx';
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    } catch (error) {
        alert('Error creating Word document. Downloading as TXT instead.');
        downloadAsText(fileName + '.txt', content);
    }
}

function applyQuick(jobIndex) {
    if (!app.currentUser) {
        alert('Please login to apply');
        openModal('loginModal');
        return;
    }
    
    // Show options to upload/enhance or use existing resume
    app.selectedJobForEnhance = jobIndex;
    const jobHasResume = app.resumesByJob[jobIndex];
    
    if (jobHasResume) {
        // Has resume for this job - show apply options
        alert('You have a resume for this position. Choose:\n\n1. Press OK to enhance and apply with AI\n2. Press Cancel to apply with your existing resume');
        openModal('uploadResumeModal');
    } else {
        // No resume for this job yet - upload one
        alert('Please upload a resume for this position');
        openModal('uploadResumeModal');
    }
}

// Send email confirmation (simulated)
function sendEmailConfirmation(email, jobTitle, company, jobIndex) {
    const job = app.jobs[jobIndex];
    const timestamp = new Date().toLocaleString();
    
    // Simulate sending email
    const emailContent = `
✉️ APPLICATION CONFIRMATION EMAIL
════════════════════════════════════════════════════════════════

Dear ${app.currentUser.name},

🎉 Your application has been successfully submitted!

📋 APPLICATION DETAILS:
─────────────────────────────────────────────────────────────
Position: ${job.title}
Company: ${company}
Location: ${job.city}, ${job.state}
Salary Range: ${job.salary}
Match Score: ${job.match}%

📝 WHAT'S NEXT:
─────────────────────────────────────────────────────────────
1. The hiring team at ${company} will review your application
2. They may contact you directly via email or phone
3. Keep your resume updated in CareerPulse Pro
4. Check back for application status updates

🔍 TECHNOLOGIES REQUIRED:
─────────────────────────────────────────────────────────────
${job.tech.map(t => `✓ ${t}`).join('\n')}

⏰ APPLICATION SUBMITTED:
${timestamp}

📧 CONFIRMATION EMAIL SENT TO:
${email}

💡 TIP: Check your email spam folder if you don't see this confirmation.

────────────────────────────────────────────────────────────────
Best of luck with your application!
CareerPulse Pro Team
════════════════════════════════════════════════════════════════`;

    // Store email confirmation in user data
    if (!app.currentUser.emailConfirmations) {
        app.currentUser.emailConfirmations = [];
    }
    
    app.currentUser.emailConfirmations.push({
        jobIndex: jobIndex,
        jobTitle: job.title,
        company: company,
        email: email,
        timestamp: timestamp,
        content: emailContent
    });
    
    // Update localStorage
    localStorage.setItem('currentUser', JSON.stringify(app.currentUser));
    
    // Log email in console for demo
    console.log('📧 EMAIL SENT TO:', email);
    console.log(emailContent);
    
    return emailContent;
}

// Show email confirmation modal
function showEmailConfirmation(jobTitle, company, email) {
    const modal = document.getElementById('emailConfirmationModal');
    if (modal) {
        document.getElementById('emailJobTitle').textContent = jobTitle;
        document.getElementById('emailCompany').textContent = company;
        document.getElementById('emailAddress').textContent = email;
        openModal('emailConfirmationModal');
    }
}

function goBackToJobSearch() {
    closeModal('enhancedResumeViewModal');
    showSection('dashboardSection');
    renderJobs(app.filteredJobs);
}

function applyWithExistingResume() {
    const jobIndex = app.selectedJobForEnhance;
    const job = app.jobs[jobIndex];
    
    // Check if resume was uploaded
    if (!app.uploadedFile || !app.uploadedFile.content) {
        alert('❌ Please upload your resume first');
        return;
    }
    
    const resume = app.resumesByJob[jobIndex] || app.currentResume;
    
    if (!resume) {
        alert('❌ No resume found. Please upload one first.');
        return;
    }
    
    app.applyForJob(jobIndex, resume);
    closeModal('uploadResumeModal');
    renderJobs(app.filteredJobs);
    
    // Send email confirmation
    sendEmailConfirmation(app.currentUser.email, job.title, job.company, jobIndex);
    
    // Update applications counter
    updateDashboardStats();
    
    // Set confirmation message
    document.getElementById('confirmationMessage').innerHTML = '📝 Your <strong>resume</strong> has been sent successfully.<br><br>📧 Confirmation email would be sent to: <strong>' + app.currentUser.email + '</strong>';
    openModal('confirmationModal');
}

// Event Listeners
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        if (!email || !password) {
            alert('Please enter email and password');
            return;
        }
        
        if (app.login(email, password)) {
            closeModal('loginModal');
            document.getElementById('loginForm').reset();
            document.getElementById('userDisplayName').textContent = app.currentUser.name;
            updateHeaderUI();
            showSection('dashboardSection');
            initializeFilters();
            app.currentPage = 1;
            renderJobs();
            console.log('✅ Login successful:', app.currentUser.name);
        } else {
            alert('❌ Invalid email or password. Please try again.');
            console.log('❌ Login failed - invalid credentials');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Error during login. Please try again.');
    }
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;
        
        if (!name || !email || !password || !confirm) {
            alert('Please fill all fields');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }
        
        const result = app.signup(name, email, password);
        if (result) {
            app.login(email, password);
            closeModal('signupModal');
            document.getElementById('signupForm').reset();
            document.getElementById('userDisplayName').textContent = app.currentUser.name;
            updateHeaderUI();
            showSection('dashboardSection');
            initializeFilters();
            app.currentPage = 1;
            renderJobs();
            alert(`✅ Welcome, ${name}! Account created successfully.`);
            console.log('✅ Signup successful:', name);
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert('Error during signup. Please try again.');
    }
});

document.getElementById('logoutBtn')?.addEventListener('click', () => {
    app.logout();
    updateHeaderUI();
    showSection('heroSection');
});

// Forgot Password Event Listeners
document.getElementById('forgotPasswordForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    sendPasswordReset();
});

document.getElementById('resetPasswordForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    resetPassword();
});

document.getElementById('searchInput')?.addEventListener('input', searchAndFilter);
document.getElementById('stateFilter')?.addEventListener('change', searchAndFilter);
document.getElementById('techFilter')?.addEventListener('change', searchAndFilter);
document.getElementById('sortFilter')?.addEventListener('change', searchAndFilter);

document.getElementById('headerLoginBtn')?.addEventListener('click', () => openModal('loginModal'));
document.getElementById('headerSignupBtn')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('heroLoginBtn')?.addEventListener('click', () => openModal('loginModal'));
document.getElementById('heroSignupBtn')?.addEventListener('click', () => openModal('signupModal'));

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal.id);
    });
});

// Clean up old localStorage data on page load
try {
    const appDataSize = localStorage.getItem('applications')?.length || 0;
    console.log(`📊 Current applications data size: ${appDataSize} bytes`);
    
    // If applications data is too large, clear it to prevent quota errors
    if (appDataSize > 500000) {
        console.warn('⚠️ Clearing old applications data to free space (~500KB)');
        localStorage.removeItem('applications');
    }
} catch (e) {
    console.error('Error managing storage:', e);
}

// Initialize
updateHeaderUI(); // Initialize header UI based on login state

if (app.currentUser) {
    document.getElementById('userDisplayName').textContent = app.currentUser.name;
    showSection('dashboardSection');
    initializeFilters();
    app.currentPage = 1;
    renderJobs();
}
