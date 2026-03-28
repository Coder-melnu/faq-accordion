import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FAQItem from "@/components/faq-item";
import { faqs } from "@/data/faqs";
import { useState } from "react";
import iconStar from "@/assets/icon-star.svg";
export default function FAQCard() {
  const [openFAQId, setOpenFAQId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenFAQId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Card className="w-full max-w-140 mx-auto bg-white rounded-2xl">
      <CardHeader>
        <div className="flex gap-4 items-center pt-4">
          <img src={iconStar} alt="Star Icon" className="w-9 h-9" />
          <p className="text-5xl text-faq-dark font-bold uppercase">FAQs</p>
        </div>
      </CardHeader>
      <CardContent>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQId === faq.id}
            onToggleFAQ={() => toggleFAQ(faq.id)}
          />
        ))}
      </CardContent>
    </Card>
  );
}
