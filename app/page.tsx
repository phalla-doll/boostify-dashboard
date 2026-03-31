'use client';

import { Bell, ChevronDown, Download, Settings, Sparkles, Search, ArrowUpRight, Users, Clock, RefreshCw, Cpu, X } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, ReferenceLine } from 'recharts';
import Image from 'next/image';

const salesData = [
  { name: 'Jan', value: 200000 },
  { name: 'Feb', value: 350000 },
  { name: 'Mar', value: 450000 },
  { name: 'May', value: 300000 },
  { name: 'Apr', value: 250000 },
  { name: 'Jun', value: 400000 },
  { name: 'Jul', value: 350000 },
  { name: 'Aug', value: 450000 },
  { name: 'Sep', value: 972000 },
  { name: 'Oct', value: 850000 },
  { name: 'Nov', value: 400000 },
  { name: 'Dec', value: 300000 },
];

const expensesData = [
  { name: 'Accounting', value: 350000, color: '#C4F06A', label: '-12%' },
  { name: 'Customer service', value: 450000, color: '#FF7A70', label: '+8.5%' },
  { name: 'Human resources', value: 400000, color: '#C4F06A', label: '-19%' },
  { name: 'Purchases', value: 250000, color: '#FF7A70', label: '+2.5%' },
];

const satisfactionData = [
  { name: 'Promoters', value: 75, color: '#C4F06A' },
  { name: 'Passives', value: 13.5, color: '#3B82F6' },
  { name: 'Detractors', value: 11.5, color: '#EF4444' },
];

const CustomBarLabel = (props: any) => {
  const { x, y, width, index } = props;
  const item = expensesData[index];
  return (
    <text x={x + width / 2} y={y - 10} fill={item.color} textAnchor="middle" fontSize={12} fontWeight={300}>
      {item.label}
    </text>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#111210] text-zinc-100 font-light selection:bg-[#C4F06A] selection:text-black">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-[#2A2D28] bg-[#111210]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C4F06A] to-green-600 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#111210] rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-normal tracking-wide">Boostify</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-zinc-400 bg-[#1A1C19] p-1 rounded-full border border-[#2A2D28]">
          <a href="#" className="px-6 py-2 rounded-full bg-[#C4F06A] text-black font-normal transition-colors">Dashboard</a>
          <a href="#" className="px-6 py-2 rounded-full hover:text-zinc-100 transition-colors">Customers</a>
          <a href="#" className="px-6 py-2 rounded-full hover:text-zinc-100 transition-colors">Products</a>
          <a href="#" className="px-6 py-2 rounded-full hover:text-zinc-100 transition-colors">Analytics</a>
          <a href="#" className="px-6 py-2 rounded-full hover:text-zinc-100 transition-colors">Reporting</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="w-10 h-10 rounded-full border border-[#2A2D28] bg-[#1A1C19] flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="https://picsum.photos/seed/user/100/100"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border border-[#2A2D28]"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-normal group-hover:text-[#C4F06A] transition-colors">William Cooper</div>
              <div className="text-xs text-zinc-500">Premium Plan</div>
            </div>
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-1">
            <h1 className="text-4xl font-normal tracking-tight">Dashboard</h1>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Type to search for everything..."
                className="w-full bg-[#1A1C19] border border-[#2A2D28] rounded-full py-3 pl-12 pr-4 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:border-[#C4F06A] transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full border border-[#2A2D28] bg-[#1A1C19] hover:bg-[#222520] transition-colors text-zinc-400 flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-full border border-[#2A2D28] bg-[#1A1C19] hover:bg-[#222520] transition-colors text-sm flex items-center gap-2">
              Download Report
            </button>
            <button className="px-6 py-3 rounded-full bg-[#C4F06A] text-black hover:bg-[#b3e05a] transition-colors text-sm flex items-center gap-2 font-normal">
              <Sparkles className="w-4 h-4" />
              AI Assistant
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Total Volume */}
            <div className="bg-zinc-100 text-black rounded-3xl p-6 flex flex-col justify-between h-[220px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-normal tracking-tight">300</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C4F06A] text-xs font-normal">+16.5%</span>
                  </div>
                  <div className="text-sm text-zinc-600 leading-relaxed">Total volume of services<br/>provided</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-zinc-600" />
                </div>
              </div>
              <button className="text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit font-normal">
                More detail <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* New Clients */}
            <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 flex flex-col justify-between h-[220px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-normal tracking-tight">64</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#FF7A70]/20 text-[#FF7A70] text-xs font-normal">-8.5%</span>
                  </div>
                  <div className="text-sm text-zinc-400">Number of new clients</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#2A2D28] bg-[#222520] flex items-center justify-center">
                  <Users className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
              <button className="text-sm text-[#C4F06A] flex items-center gap-1 hover:gap-2 transition-all w-fit font-normal">
                More detail <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Small Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Advertising', value: '30%' },
                { label: 'Development', value: '25%' },
                { label: 'Sales', value: '30%' },
                { label: 'Management', value: '15%' },
              ].map((item, i) => (
                <div key={i} className="bg-[#1A1C19] border border-[#2A2D28] rounded-2xl p-5 flex justify-between items-end h-[100px]">
                  <div>
                    <div className="text-2xl font-normal mb-1">{item.value}</div>
                    <div className="text-xs text-zinc-500">{item.label}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C4F06A]" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Customer Satisfaction */}
            <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 h-[464px] flex flex-col">
              <h3 className="text-xl font-normal mb-8">Customer Satisfaction</h3>
              
              <div className="relative flex-1 flex items-center justify-center mb-8">
                <div className="w-56 h-56 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <Pie
                        data={satisfactionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={10}
                      >
                        {satisfactionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} filter={index === 0 ? 'url(#glow)' : ''} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-zinc-500 mb-1">Total Budget</span>
                    <span className="text-3xl font-normal tracking-tight">$19 530<span className="text-zinc-500 text-xl">,50</span></span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6 px-4">
                {satisfactionData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-zinc-300">{item.name}</span>
                    </div>
                    <span className="font-normal">{item.value}%</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3.5 rounded-xl border border-[#2A2D28] text-sm text-[#C4F06A] hover:bg-[#222520] transition-colors flex items-center justify-center gap-2 mt-auto font-normal">
                More detail <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Operating Expenses */}
            <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 h-[320px] flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-normal">Operating expenses</h3>
                <button className="text-sm text-[#C4F06A] underline decoration-[#C4F06A]/30 underline-offset-4 hover:decoration-[#C4F06A] transition-colors">
                  After AI implementation
                </button>
              </div>
              
              <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expensesData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A2D28" />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12, fontWeight: 300 }}
                      tickFormatter={(value) => `$${value / 1000}K`}
                    />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12, fontWeight: 300 }}
                      dy={10}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: '#1A1C19', border: '1px solid #2A2D28', borderRadius: '8px', fontWeight: 300 }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={80} label={<CustomBarLabel />}>
                      {expensesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Year Plan */}
            <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-normal">Corporate Year Plan</h3>
                <button className="text-sm text-[#C4F06A] flex items-center gap-1 hover:gap-2 transition-all font-normal">
                  More detail <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-sm text-[#C4F06A] mb-1">Current result</div>
                  <div className="text-4xl font-normal tracking-tight text-[#C4F06A]">$22,567,081.00</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-400 mb-1">Left plan</div>
                  <div className="text-2xl font-normal tracking-tight">$8,432,119.00</div>
                </div>
              </div>

              <div className="h-16 w-full bg-[#222520] rounded-2xl overflow-hidden flex relative">
                <div className="h-full bg-gradient-to-r from-[#C4F06A]/20 to-[#C4F06A] w-[70%] rounded-r-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Company Sales Target */}
            <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 h-[460px] flex flex-col relative">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-normal">Company sales target</h3>
                <div className="flex gap-4 text-sm">
                  <button className="text-[#C4F06A] underline decoration-[#C4F06A]/30 underline-offset-4">Year</button>
                  <button className="text-zinc-500 hover:text-zinc-300 transition-colors">Quarter</button>
                  <button className="text-zinc-500 hover:text-zinc-300 transition-colors">Month</button>
                  <button className="text-zinc-500 hover:text-zinc-300 transition-colors">Week</button>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A2D28" />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12, fontWeight: 300 }}
                      tickFormatter={(value) => `$${value / 1000}K`}
                    />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12, fontWeight: 300 }}
                      dy={10}
                    />
                    <Tooltip 
                      cursor={{ fill: '#222520' }}
                      contentStyle={{ backgroundColor: '#1A1C19', border: '1px solid #2A2D28', borderRadius: '8px', fontWeight: 300 }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <ReferenceLine y={600000} stroke="#C4F06A" strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#2A2D28" radius={[4, 4, 0, 0]} maxBarSize={40}>
                      {salesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 8 ? '#C4F06A' : '#2A2D28'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                
                {/* Custom Tooltip Overlay for the highlighted bar */}
                <div className="absolute top-4 left-[65%] -translate-x-1/2 bg-white text-black px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-4 z-10">
                  <div>
                    <div className="font-normal text-sm">$972,000.00</div>
                    <div className="text-xs text-zinc-500">Sep, 2024</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#C4F06A] text-xs font-normal">+16.5%</span>
                </div>
                
                {/* Highlighted Bar Line */}
                <div className="absolute top-16 bottom-6 left-[65%] w-0.5 bg-[#C4F06A] pointer-events-none flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#C4F06A] -mt-1"></div>
                </div>
              </div>

              <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-[#2A2D28] bg-[#1A1C19] flex items-center justify-center hover:bg-[#222520] transition-colors">
                <RefreshCw className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* AI Implementation Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 flex flex-col justify-between h-[180px]">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-normal tracking-tight">$320,500.00</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FF7A70]/20 text-[#FF7A70] text-xs font-normal">-8.5%</span>
                    </div>
                    <div className="text-sm text-zinc-400">Before AI implementation</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#2A2D28] bg-[#222520] flex items-center justify-center">
                    <X className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                <button className="text-sm text-[#C4F06A] flex items-center gap-1 hover:gap-2 transition-all w-fit font-normal">
                  More detail <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-[#1A1C19] border border-[#2A2D28] rounded-3xl p-6 flex flex-col justify-between h-[180px]">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-normal tracking-tight">$480,500.00</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#C4F06A] text-black text-xs font-normal">+16.5%</span>
                    </div>
                    <div className="text-sm text-zinc-400">After AI implementation</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#2A2D28] bg-[#222520] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-zinc-400" />
                  </div>
                </div>
                <button className="text-sm text-[#C4F06A] flex items-center gap-1 hover:gap-2 transition-all w-fit font-normal">
                  More detail <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
