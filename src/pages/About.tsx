import { ArrowRight, Heart, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 lg:order-1">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8 leading-[0.9]">
            The Science <br /> of Feeling.
          </h1>
          <p className="text-lg text-lulu-ink/70 leading-relaxed mb-8">
            Founded in 2024, lululemon was born from a simple observation: technical athletic gear often sacrificed comfort for performance, or style for utility. We believed you shouldn't have to choose.
          </p>
          <p className="text-lg text-lulu-ink/70 leading-relaxed">
            Our lab focuses on the intersection of textile engineering and human psychology. By perfecting how a fabric feels against the skin, we unlock the state of "flow"—allowing you to move without distraction.
          </p>
        </div>
        <div className="order-1 lg:order-2 aspect-[4/5] rounded-[3rem] overflow-hidden">
          <img src="https://images.lululemon.com/is/image/lululemon/NA_Mar24_W_Leggings_Story_1_1_D_Main?wid=1000&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="Fabric Lab" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        <div className="space-y-6">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <Heart className="w-6 h-6 text-lulu-sage" />
          </div>
          <h3 className="text-xl font-display font-bold">Unmatched Comfort</h3>
          <p className="text-sm text-lulu-muted leading-relaxed">Every seam is placed with purpose. Every thread is chosen for its softness and durability.</p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <Globe className="w-6 h-6 text-lulu-sage" />
          </div>
          <h3 className="text-xl font-display font-bold">Sustainable Innovation</h3>
          <p className="text-sm text-lulu-muted leading-relaxed">We utilize recycled nylons and organic cottons wherever possible, aiming for a net-zero footprint by 2030.</p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <Award className="w-6 h-6 text-lulu-sage" />
          </div>
          <h3 className="text-xl font-display font-bold">Pro-Grade Performance</h3>
          <p className="text-sm text-lulu-muted leading-relaxed">Tested by elite athletes in the most extreme conditions to ensure your gear never fails you.</p>
        </div>
      </section>

      <section className="text-center bg-lulu-bg p-16 md:p-32 rounded-[4rem]">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">We believe in the power <br /> of movement.</h2>
        <p className="max-w-2xl mx-auto text-lg text-lulu-muted mb-12">Whether it's a marathon or a morning meditation, lululemon is here to support your journey toward a better you.</p>
        <button className="bg-lulu-ink text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
          Join the Movement
        </button>
      </section>
    </div>
  );
}
