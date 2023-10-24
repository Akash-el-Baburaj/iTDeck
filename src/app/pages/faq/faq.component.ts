import { Component, OnInit } from '@angular/core';

// type

@Component({
  selector: 'app-landing-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  FAQs: any[] = [];
  constructor () { }

  ngOnInit(): void {
    this.FAQs = [
      {
        id: 1,
        question: 'What services does iTDeck provide?',
        answer: 'iTDeck offers a wide range of services, from innovative idea exploration to tailored technology recommendations, and strategic marketing approaches.',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      },
      {
        id: 2,
        question: 'How does iTDeck support businesses globally?',
        answer: "iTDeck empowers businesses with tailored solutions, leveraging global insights, diverse industry expertise, and end-to-end support for international success.",
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      },
      {
        id: 3,
        question: `Can I trust iTDeck's technology recommendations?`,
        answer: 'Absolutely. Our technology recommendations are based on expert insights and aligned with your business goals for optimal results.',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      },
      {
        id: 4,
        question: `What's the process for engaging iTDeck's services?`,
        answer: `Engaging with iTDeck involves in-depth consultation, custom solutions, and seamless project management, ensuring your vision is executed flawlessly.`,
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      },
      {
        id: 5,
        question: `How does iTDeck's marketing expertise benefit me?`,
        answer: `iTDeck's marketing strategies resonate globally, leveraging strategic approaches and digital mastery to boost your brand's visibility and growth.`,
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      },
      {
        id: 6,
        question: `Can iTDeck assist businesses in different industries?`,
        answer: `Certainly. Our diverse industry expertise spans sectors like inventory management, factory automation, and e-commerce, ensuring targeted solutions.`,
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
      }
    ]
  }

}
