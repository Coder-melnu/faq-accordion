type FAQTypes = {
  id: number;
  question: string;
  answer: string;
};
export const faqs: FAQTypes[] = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium challenges. Free challenges are accessible without a subscription.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use your Frontend Mentor solutions in your portfolio. We encourage sharing your work.",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "You can ask for help in the Frontend Mentor community on Slack or Discord, or post your question in the community forum.",
  },
];
