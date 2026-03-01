import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqs } from "../data/faqs";

export function FAQSection() {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-left text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 dark:text-slate-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
