const mockArrays = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A project for developing a new social media platform.",
    created_at: "2024-11-01",
    team: [
      {
        userId: 101,
        name: "Alice",
        role: "Project Manager",
        contact: {
          email: "alice@example.com",
          phone: "123-456-7890",
        },
        tasks: [
          {
            taskId: 1001,
            title: "Define project scope",
            status: "Completed",
            priority: "High",
            due_date: "2024-11-05",
            tags: ["planning", "management"],
            comments: [
              { userId: 102, comment: "Scope looks good.", date: "2024-11-02" },
              {
                userId: 103,
                comment: "Need some revisions.",
                date: "2024-11-03",
              },
            ],
          },
          {
            taskId: 1002,
            title: "Assemble team",
            status: "In Progress",
            priority: "Medium",
            due_date: "2024-11-10",
            tags: ["team", "management"],
            comments: [],
          },
        ],
      },
      {
        userId: 102,
        name: "Bob",
        role: "Developer",
        contact: {
          email: "bob@example.com",
          phone: "098-765-4321",
        },
        tasks: [
          {
            taskId: 1003,
            title: "Develop login module",
            status: "Pending",
            priority: "High",
            due_date: "2024-11-15",
            tags: ["backend", "authentication"],
            comments: [
              {
                userId: 101,
                comment: "Start by end of week.",
                date: "2024-11-04",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Project Beta",
    description: "A mobile app for task management.",
    created_at: "2024-10-15",
    team: [
      {
        userId: 103,
        name: "Charlie",
        role: "Designer",
        contact: {
          email: "charlie@example.com",
          phone: "456-789-0123",
        },
        tasks: [
          {
            taskId: 2001,
            title: "Design app logo",
            status: "Completed",
            priority: "High",
            due_date: "2024-10-20",
            tags: ["design", "branding"],
            comments: [
              {
                userId: 104,
                comment: "Logo looks amazing!",
                date: "2024-10-19",
              },
            ],
          },
          {
            taskId: 2002,
            title: "Create UI wireframes",
            status: "In Progress",
            priority: "High",
            due_date: "2024-11-15",
            tags: ["design", "UI"],
            comments: [],
          },
        ],
      },
      {
        userId: 104,
        name: "Dana",
        role: "Marketing Specialist",
        contact: {
          email: "dana@example.com",
          phone: "321-654-9870",
        },
        tasks: [
          {
            taskId: 2003,
            title: "Market research",
            status: "Completed",
            priority: "Low",
            due_date: "2024-10-25",
            tags: ["marketing", "research"],
            comments: [
              {
                userId: 103,
                comment: "Found interesting insights!",
                date: "2024-10-24",
              },
            ],
          },
        ],
      },
    ],
  },
];

//
function shouldDeepCompare(type) {
  return type === "[object Object]" || type === "[object Array]";
}

function getType(value) {
  return Object.prototype.toString.call(value);
}

function deepEqual(valueA, valueB) {
  const typeA = getType(valueA);
  const typeB = getType(valueB);

  if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);

    if (entriesA.length !== entriesB.length) {
      return false;
    }

    return entriesA.every(([k, v]) => {
      return Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]);
    });
  }

  return Object.is(valueA, valueB);
}

deepEqual({ foo: "bar" }, { foo: "bar" });
