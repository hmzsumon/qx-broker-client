"use client";
import type {RankSummaryItem} from '@/types/rank';
import {ProgressBar} from '@/components/ProgressBar';
export function RankRequirements({item}:{item:RankSummaryItem}){
 const rows=item.requirements||[{label:'Team sales',current:item.progress.teamVolume,target:item.targetVolume,unit:'USD',met:item.qualified}];
 return <div className="mt-4 space-y-3">{rows.map(row=><div key={row.label}><div className="flex justify-between gap-3 text-xs text-white/65"><span>{row.label}</span><span>{row.unit==='USD'?'$':''}{row.current.toLocaleString()} / {row.unit==='USD'?'$':''}{row.target.toLocaleString()}</span></div><ProgressBar value={Math.min(row.current,row.target)} max={row.target||1}/></div>)}<p className="text-xs text-white/60">Overall {item.progress.overall}% · {item.qualified?'Requirements met':'Complete each requirement above'}</p></div>;
}
