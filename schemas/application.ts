export default {
  name: "application",
  title: "Applications",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "currentSchool",
      title: "Current School",
      type: "string",
    },
    {
      name: "gradeLevel",
      title: "Grade Level",
      type: "string",
    },
    {
      name: "program",
      title: "Preferred Program",
      type: "string",
    },
    {
      name: "academicAchievements",
      title: "Academic Achievements",
      type: "text",
    },
    {
      name: "extracurricularActivities",
      title: "Extracurricular Activities",
      type: "text",
    },
    {
      name: "whyJoin",
      title: "Why Join",
      type: "text",
    },
    {
      name: "parentName",
      title: "Parent/Guardian Name",
      type: "string",
    },
    {
      name: "parentEmail",
      title: "Parent/Guardian Email",
      type: "string",
    },
    {
      name: "parentPhone",
      title: "Parent/Guardian Phone",
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
  ],
}

