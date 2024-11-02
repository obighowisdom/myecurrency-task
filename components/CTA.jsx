import React from 'react'
import Title from './ui/title'
import { Button } from './ui/button';
import Divider from './ui/divider';

const CTA = () => {
  return (
    <section className="text-center mx-[20px] md:mx-0 ">
      <Title name="Visit Our Shop" />
      <p className="my-12 leading-[26px] text-[16px] font-sans text-[#21384299]">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A <br /> few breaths of our
        plant-based essential oil mist will mellow you out, quiet the mind, and
        lull you to bed.
      </p>
      <Button className="w-[225px] mb-10 md:mb-14 h-[50px]" variant="destructive">
        Visit Shop
          </Button>
          <Divider />
    </section>
  );
}

export default CTA