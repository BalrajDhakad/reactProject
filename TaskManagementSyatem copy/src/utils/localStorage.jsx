const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Prepare Monthly Report",
        description: "Compile the monthly sales data and create a comprehensive report.",
        date: "2024-12-20",
        category: "Reporting"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Attend Client Meeting",
        description: "Discuss project milestones with the client.",
        date: "2024-12-18",
        category: "Meetings"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Update CRM Records",
        description: "Ensure all customer details are accurate in the system.",
        date: "2024-12-22",
        category: "Data Management"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Review Code",
        description: "Perform code reviews for the latest pull requests.",
        date: "2024-12-19",
        category: "Development"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Fix Bugs",
        description: "Resolve critical bugs reported by QA.",
        date: "2024-12-17",
        category: "Development"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Write Documentation",
        description: "Draft user guides for the new application features.",
        date: "2024-12-21",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Plan Team Outing",
        description: "Organize a team bonding event for the end of the month.",
        date: "2024-12-25",
        category: "HR"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Prepare Training Session",
        description: "Create materials for an upcoming training session.",
        date: "2024-12-16",
        category: "Training"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Update Policies",
        description: "Review and update company HR policies.",
        date: "2024-12-24",
        category: "HR"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Analyze Market Trends",
        description: "Perform a detailed analysis of the latest market trends.",
        date: "2024-12-23",
        category: "Research"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Create Presentation",
        description: "Design a presentation for the quarterly review meeting.",
        date: "2024-12-15",
        category: "Presentation"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Develop Strategy",
        description: "Draft a marketing strategy for the upcoming product launch.",
        date: "2024-12-20",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Optimize Database",
        description: "Improve database performance by optimizing queries.",
        date: "2024-12-19",
        category: "Database"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Setup Servers",
        description: "Configure and secure the new servers for deployment.",
        date: "2024-12-14",
        category: "IT"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Backup Systems",
        description: "Ensure all critical systems are backed up for safety.",
        date: "2024-12-22",
        category: "IT"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('Employees', JSON.stringify(employees))
  localStorage.setItem('Admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const dataEmp = JSON.parse(localStorage.getItem('Employees'))
  const dataAdmin = JSON.parse(localStorage.getItem('Admin'))
  return {dataAdmin, dataEmp}
}