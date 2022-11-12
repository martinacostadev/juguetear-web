export default {
  name: "movement",
  title: "Movimiento del juguete",
  type: "document",
  fields: [
    {
      name: "toyName",
      title: "Nombre del juguete.",
      type: "string",
      description: "Indicar el nombre del juguete.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "noMvt",
      title: "Sin movimiento",
      type: "boolean",
      description: "El juguete no tiene movimiento.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "forwardMvt",
      title: "Movimiento hacia delante",
      type: "boolean",
      description: "El juguete solo se mueve hacia delante.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backwardsMvt",
      title: "Movimiento hacia atrás",
      type: "boolean",
      description: "El juguete solo se mueve hacia atrás.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "leftMvt",
      title: "Movimiento hacia la izquierda",
      type: "boolean",
      description: "El juguete solo se mueve hacia la izquierda.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rightMvt",
      title: "Movimiento hacia la derecha",
      type: "boolean",
      description: "El juguete solo se mueve hacia la derecha.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "randomMvt",
      title: "Movimiento aleatorio",
      type: "boolean",
      description: "El juguete tiene movimientos aleatorios.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "toyName",
    },
    prepare({ title }) {
      return {
        title: `Movimiento del juguete "${title}"`,
        subtitle: `Movimientos posibles por el juguete.`,
      };
    },
  },
};
