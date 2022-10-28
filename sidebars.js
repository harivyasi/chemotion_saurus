module.exports = {
  sidebar: [
    "welcome",
    {
      type: "category",
      label: "Installation",
      link: {
        type: "doc",
        id: "installation",
      },
      items: [
        "installation/system_check",
      ]
    },
    {
      type: "category",
      label: "Chemotion ELN",
      link: {
        type: "doc",
        id: "eln"
      },
      items: [
        "eln/details"
      ]
    },
    {
      type: "category",
      label: "ChemConverter",
      link: {
        type: "doc",
        id: "converter",
      },
      items: [
        {
          type: "category",
          label: "Profiles",
          link: {
            type: "doc",
            id: "converter/profiles",
          },
          items: [
            "converter/profiles/cv",
            "converter/profiles/uvvis"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Development",
      link: {
        type: "doc",
        id: "development"
      },
      items: [
        "development/learning_resources",
        "development/architecture",
        "development/debugging",
        "development/linting",
        "development/testing",
        "development/ci",
        "development/performance"
      ]
    },

  ]
};