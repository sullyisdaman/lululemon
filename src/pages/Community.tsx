import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react';

export default function Community() {
  const events = [
    { title: 'Morning Flow Yoga', date: 'May 12', location: 'Santa Monica, CA', type: 'Yoga' },
    { title: '5K Sunset Run', date: 'May 15', location: 'Central Park, NY', type: 'Running' },
    { title: 'HIIT & Hydrate', date: 'May 20', location: 'London, UK', type: 'Training' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
      <header className="max-w-3xl mb-24">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">Better Together</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-[0.9]">
          The lululemon <br /> Collective.
        </h1>
        <p className="mt-8 text-xl text-lulu-ink/60 leading-relaxed">
          We are more than just gear. We are a global network of movers, dreamers, and achievers. Join us for studio sessions, local run clubs, and community wellness events.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        {events.map((event, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-lulu-muted/10 rounded-3xl overflow-hidden mb-6">
               <img src={`https://images.lululemon.com/is/image/lululemon/na_feb24_Yoga_1_1_D_Main?wid=800&qlt=80&op_usm=0.8,1,10,0&fmt=webp&fit=constrain,0&resMode=sharp2&printRes=72&seed=${i}`} alt={event.title} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-between items-start">
               <div>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-lulu-sage">{event.type}</span>
                 <h3 className="text-xl font-display font-bold mt-1">{event.title}</h3>
                 <div className="flex items-center text-xs text-lulu-muted mt-2 space-x-4">
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {event.date}</span>
                   <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {event.location}</span>
                 </div>
               </div>
               <button className="p-3 border border-lulu-ink/10 rounded-full group-hover:bg-lulu-ink group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-lulu-ink text-white p-12 md:p-24 rounded-[3rem] text-center">
        <Users className="w-12 h-12 mx-auto mb-8 text-lulu-sage" />
        <h2 className="text-4xl font-display font-bold mb-6">Become an Ambassador</h2>
        <p className="max-w-xl mx-auto opacity-70 mb-10 leading-relaxed text-lg">
          Do you embody the lululemon lifestyle? We're looking for passionate community leaders to represent our brand and host exclusive experiences.
        </p>
        <button className="bg-white text-lulu-ink px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
          Apply to Lead
        </button>
      </section>
    </div>
  );
}
