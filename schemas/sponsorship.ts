export default {
  name: "sponsorship",
  title: "Sponsorships",
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
      name: "organization",
      title: "Organization",
      type: "string",
    },
    {
      name: "areaOfInterest",
      title: "Area of Interest",
      type: "string",
    },
    {
      name: "supportType",
      title: "Type of Support",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
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

