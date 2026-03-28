import iconPlus from "@/assets/icon-plus.svg";
import iconMinus from "@/assets/icon-minus.svg";
type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggleFAQ: () => void;
};
export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggleFAQ,
}: FAQItemProps) {
  return (
    <div className="py-5 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg text-faq-dark hover:text-fuchsia-700">
          {question}
        </span>
        <button onClick={onToggleFAQ}>
          {isOpen ? (
            <img src={iconMinus} alt="Minus Icon" />
          ) : (
            <img src={iconPlus} alt="Plus Icon" />
          )}
        </button>
      </div>
      {isOpen && <p className="text-faq-mid text-sm ">{answer}</p>}
    </div>
  );
}
