import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Dumbbell } from 'lucide-react';

export default function MarchCalendar() {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const events = {
    recurring: [
      { day: 'Monday-Friday', time: '07:30', title: 'Morning mobility check in', location: 'with Sebas', icon: 'mobility' },
      { day: 'Monday-Friday', time: '08:00', title: 'Morning walk', location: 'with Millon', icon: 'walk' }
    ],
    weeks: [
      {
        week: 'Week 01/03 - 08/03',
        dates: 'Mar 1-8',
        events: [
          {
            date: 'Saturday 07/03',
            items: [
              { time: '07:30', title: '🎉 Welcoming Hike - Waterfall', subtitle: 'Welcome Maria!', type: 'welcome' },
              { time: '18:00', title: 'Community Dinner', type: 'social' }
            ]
          },
          {
            date: 'Sunday 08/03',
            items: [
              { time: '08:00', title: 'Yoga Vinyasa', subtitle: 'with Piero', type: 'wellness' }
            ]
          }
        ]
      },
      {
        week: 'Week 09/03 - 15/03',
        dates: 'Mar 9-15',
        events: [
          {
            date: 'Monday 09/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Wednesday 11/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Saturday 14/03',
            items: [
              { time: '08:00', title: 'Yoga Vinyasa', subtitle: 'with Piero', type: 'wellness' },
              { time: '18:00', title: '🎉 Welcome Max!', type: 'welcome' },
              { time: '18:00', title: 'Community Dinner + Social Event', type: 'social' }
            ]
          },
          {
            date: 'Sunday 15/03',
            items: [
              { time: '08:00', title: 'Excursion', subtitle: 'TBD', type: 'excursion' }
            ]
          }
        ]
      },
      {
        week: 'Week 16/03 - 22/03',
        dates: 'Mar 16-22',
        events: [
          {
            date: 'Monday 16/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Wednesday 18/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Saturday 21/03',
            items: [
              { time: '18:00', title: 'Community Dinner + Social Event', type: 'social' }
            ]
          },
          {
            date: 'Sunday 22/03',
            items: [
              { time: '08:00', title: 'Yoga Vinyasa', subtitle: 'with Piero', type: 'wellness' }
            ]
          }
        ]
      },
      {
        week: 'Week 23/03 - 29/03',
        dates: 'Mar 23-29',
        events: [
          {
            date: 'Monday 23/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Wednesday 25/03',
            items: [
              { time: '16:00', title: '75\' Movement Class', subtitle: 'with Sebas', type: 'movement' }
            ]
          },
          {
            date: 'Thursday 26/03',
            items: [
              { time: '—', title: '🎉 Welcome Alexandria!', type: 'welcome' }
            ]
          },
          {
            date: 'Saturday 28/03',
            items: [
              { time: '08:00', title: 'Excursion', subtitle: 'TBD', type: 'excursion' },
              { time: '18:00', title: 'Community Dinner', type: 'social' }
            ]
          },
          {
            date: 'Sunday 29/03',
            items: [
              { time: '08:00', title: 'Yoga Vinyasa', subtitle: 'with Piero', type: 'wellness' }
            ]
          }
        ]
      }
    ]
  };

  const typeColors = {
    wellness: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    movement: 'bg-blue-50 border-blue-200 text-blue-900',
    social: 'bg-amber-50 border-amber-200 text-amber-900',
    excursion: 'bg-purple-50 border-purple-200 text-purple-900',
    welcome: 'bg-rose-50 border-rose-200 text-rose-900',
    mobility: 'bg-slate-50 border-slate-200 text-slate-900',
    walk: 'bg-teal-50 border-teal-200 text-teal-900'
  };

  const typeIcons = {
    wellness: '🧘',
    movement: '💪',
    social: '🤝',
    excursion: '🏔️',
    welcome: '✨',
    mobility: '🌅',
    walk: '🚶'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 md:p-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Sohne:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Sohne', system-ui, sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Lexend', sans-serif;
          letter-spacing: -0.02em;
        }

        .week-card {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .event-item {
          transition: all 0.2s ease;
        }

        .event-item:hover {
          transform: translateX(4px);
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">March 2025</h1>
            <div className="text-lg text-slate-500">Wellness Calendar</div>
          </div>
          <p className="text-slate-600 text-lg">Community wellness & activities</p>
        </div>

        {/* Recurring Events */}
        <div className="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">Every Weekday</h2>
          <div className="space-y-3">
            {events.recurring.map((event, idx) => (
              <div key={idx} className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${typeColors[event.icon]}`}>
                <span className="text-2xl pt-0.5">{typeIcons[event.icon]}</span>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">{event.title}</div>
                  <div className="text-sm text-slate-600">{event.location} • {event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Sections */}
        <div className="space-y-8">
          {events.weeks.map((weekData, weekIdx) => (
            <div 
              key={weekIdx} 
              className="week-card"
              style={{ animationDelay: `${weekIdx * 0.1}s` }}
            >
              <button
                onClick={() => setExpandedWeek(expandedWeek === weekIdx ? null : weekIdx)}
                className="w-full text-left p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{weekData.week}</h3>
                    <p className="text-sm text-slate-500 mt-1">{weekData.dates}</p>
                  </div>
                  <ChevronRight 
                    className={`text-slate-400 transition-transform ${expandedWeek === weekIdx ? 'rotate-90' : ''}`}
                    size={24}
                  />
                </div>
              </button>

              {expandedWeek === weekIdx && (
                <div className="mt-4 space-y-4 animate-in fade-in">
                  {weekData.events.map((day, dayIdx) => (
                    <div key={dayIdx} className="ml-6">
                      <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-3">
                        {day.date}
                      </h4>
                      <div className="space-y-2">
                        {day.items.map((item, itemIdx) => (
                          <div 
                            key={itemIdx}
                            className={`event-item flex items-start gap-4 p-4 rounded-lg border-l-4 ${typeColors[item.type]}`}
                          >
                            <span className="text-2xl pt-0.5">{typeIcons[item.type]}</span>
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2">
                                <span className="text-sm font-semibold text-slate-500">{item.time}</span>
                                <span className="font-semibold text-slate-900">{item.title}</span>
                              </div>
                              {item.subtitle && (
                                <div className="text-sm text-slate-600 mt-1">{item.subtitle}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600">3</div>
              <div className="text-xs text-slate-600">Welcomes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-xs text-slate-600">Movement Classes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-xs text-slate-600">Excursions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600">4</div>
              <div className="text-xs text-slate-600">Community Dinners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
