export interface PlansTypes {
  power: PlanProps[];
  active: PlanProps[];
  healthy: PlanProps[];
}
type PlanProps = {
  title: string;
  price: number;
  preDiscount?: number;
  afterDiscount?: number;
  discount?: number;
};

export const PLANS: PlansTypes[] = [
  {
    power: [
      {
        title: "Vegetariškas",
        price: 9.99,
        preDiscount: 119.94,
        afterDiscount: 59.94,
        discount: 50,
      },
      {
        title: "Svorio metimo",
        price: 14.99,
        preDiscount: 59.97,
        afterDiscount: 44.97,
        discount: 25,
      },
    ],

    active: [
      {
        title: "Geros savijautos",
        price: 14.99,
        preDiscount: 59.97,
        afterDiscount: 44.97,
        discount: 25,
      },
      {
        title: "Be nemėgstamų produktų",
        price: 14.99,
        preDiscount: 59.97,
        afterDiscount: 44.97,
        discount: 25,
      },
    ],

    healthy: [
      {
        title: "Rūgštingumui mažinti",
        price: 14.99,
        preDiscount: 59.97,
        afterDiscount: 44.97,
        discount: 25,
      },
      {
        title: "Masės auginimo",
        price: 14.99,
        preDiscount: 59.97,
        afterDiscount: 44.97,
        discount: 25,
      },
    ],
  },
];
