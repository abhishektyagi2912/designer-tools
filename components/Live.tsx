import { useMyPresence, useOthers } from '@/liveblocks.config';
import LiveCursors from './cursor/LiveCursors';
import { useCallback } from 'react';

const Live = () => {
  const other = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((events:React.PointerEvent)=>{
    events.preventDefault();
    const x = events.clientX-events.currentTarget.getBoundingClientRect().x;
    const y = events.clientY-events.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor:{x,y}});
  },[]);

  const handlePointerLeave = useCallback((events:React.PointerEvent)=>{
    events.preventDefault();

    updateMyPresence({cursor:null ,message:null});
  },[]);

  const handlePointerDown = useCallback((events:React.PointerEvent)=>{
    const x = events.clientX-events.currentTarget.getBoundingClientRect().x;
    const y = events.clientY-events.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor:{x,y}});
  },[]);

  return (
    <div
    onPointerMove={handlePointerMove}
    onPointerDown={handlePointerDown}
    onPointerLeave={handlePointerLeave}
    className='h-[100vh] w-full flex justify-center text-center items-center'
    >
      <h1 className="text-white text-2xl">hey</h1>
      <LiveCursors others = {other} />
    </div>
  )
}

export default Live