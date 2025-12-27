"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Pause,
  Play,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ArrowDown,
  Music2,
  SkipForward,
  SkipBack,
  Volume2,
} from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      if (u.searchParams.get("v")) return u.searchParams.get("v");
      if (u.pathname.startsWith("/playlist")) return null;
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.replace("/", "") || null;
    }
    return null;
  } catch {
    return null;
  }
}

export default function MusicBar() {
  const videoUrls = [
    "https://www.youtube.com/watch?v=6E_Gcr-eW7E&list=RD6E_Gcr-eW7E&start_radio=1", // Djo - End of Beginning
    "https://www.youtube.com/watch?v=yg8C3-0NkiY&list=RDyg8C3-0NkiY&start_radio=1",
  ];

  const playerRef = useRef<any>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [apiReady, setApiReady] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60);
  const [title, setTitle] = useState<string>("Djo - end of beginning");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const firstVideoId = extractYouTubeId(videoUrls[currentIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    const scriptId = "youtube-iframe-api";
    if (!document.getElementById(scriptId)) {
      const tag = document.createElement("script");
      tag.id = scriptId;
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);

  useEffect(() => {
    if (!apiReady || !iframeContainerRef.current || !firstVideoId) return;
    if (playerRef.current) return;
    playerRef.current = new window.YT.Player(iframeContainerRef.current, {
      height: "0",
      width: "0",
      videoId: firstVideoId,
      playerVars: {
        origin: window.location.origin,
        enablejsapi: 1,
        rel: 0,
        modestbranding: 1,
        autoplay: 1,
        mute: 0,
      },
      events: {
        onReady: () => {
          setIsReady(true);
          try {
            const data = playerRef.current.getVideoData?.();
            // Use custom display title mapping
            if (currentIndex === 0) setTitle("Djo - end of beginning");
            else if (currentIndex === 1)
              setTitle("Twenty one pilots livestream");
            else if (data?.title) setTitle(data.title);
            setDuration(playerRef.current.getDuration?.() || 0);
            // Set default volume
            playerRef.current.setVolume?.(60);
            // Try autoplay (may be blocked until user interacts)
            playerRef.current.playVideo?.();
            // Additional autoplay attempt after delay
            setTimeout(() => {
              try {
                playerRef.current?.playVideo?.();
              } catch {}
            }, 1000);
          } catch {}
        },
        onStateChange: (e: any) => {
          const YTState = window.YT?.PlayerState;
          if (!YTState) return;
          if (e.data === YTState.PLAYING) setIsPlaying(true);
          if (e.data === YTState.PAUSED || e.data === YTState.ENDED)
            setIsPlaying(false);
          if (e.data === YTState.ENDED) {
            // Auto-next when a track ends
            const next = (currentIndex + 1) % videoUrls.length;
            loadByIndex(next);
          }
        },
      },
    });
  }, [apiReady, firstVideoId, currentIndex]);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      try {
        if (playerRef.current && isReady) {
          const d = playerRef.current.getDuration?.() || 0;
          const c = playerRef.current.getCurrentTime?.() || 0;
          setDuration(d);
          setProgress(d ? (c / d) * 100 : 0);
        }
      } catch {}
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [isReady]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch {}
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current || !duration) return;
    const pct = Number(e.target.value);
    const time = (pct / 100) * duration;
    try {
      playerRef.current.seekTo(time, true);
    } catch {}
  };

  const onVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    try {
      playerRef.current?.setVolume?.(v);
    } catch {}
  };

  const loadByIndex = (idx: number) => {
    const id = extractYouTubeId(videoUrls[idx]);
    if (!playerRef.current || !id) return;
    try {
      playerRef.current.loadVideoById(id);
      setCurrentIndex(idx);
      if (idx === 0) setTitle("Djo - end of beginning");
      else if (idx === 1) setTitle("Twenty one pilots livestream");
    } catch {}
  };

  const nextTrack = () => {
    const nxt = (currentIndex + 1) % videoUrls.length;
    loadByIndex(nxt);
  };

  const prevTrack = () => {
    const prv = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
    loadByIndex(prv);
  };

  return (
    <>
      <div className={cn("fixed bottom-4 right-4 z-[60]")}>
        <div
          className={cn(
            "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            "border border-border/40 shadow-lg rounded-xl overflow-visible",
            "px-3 py-2 w-[260px]"
          )}
        >
          <div className="flex items-center gap-3">
            <Music2 className="h-5 w-5 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-primary">
                {title}
              </p>
              {!isMinimized && (
                <div className="space-y-2 relative">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={progress}
                      onChange={onSeek}
                      className="w-full h-2 accent-primary"
                    />
                    <div className="relative">
                      <Button
                        size="icon"
                        variant="outline"
                        className="bg-card/30 border-border/40 h-7 w-7"
                        onClick={() => setShowVolume((v) => !v)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </Button>
                      {showVolume && (
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={volume}
                          onChange={onVolume}
                          className="absolute bottom-full left-1/2 translate-x-[45%] mb-4 z-[90] h-16 rotate-[-90deg] origin-bottom accent-primary bg-transparent"
                          style={{ width: "72px" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="bg-card/30 border-border/40"
                        onClick={prevTrack}
                        disabled={!isReady}
                      >
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card/30 border-border/40"
                        onClick={togglePlay}
                        disabled={!isReady}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card/30 border-border/40"
                        onClick={nextTrack}
                        disabled={!isReady}
                      >
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-card/30 border-border/40"
                      onClick={() => setIsMinimized((v) => !v)}
                    >
                      MIN
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isMinimized && (
          <div className="mt-2 flex justify-end">
            <Button
              variant="outline"
              className="bg-card/30 border-border/40"
              onClick={() => setIsMinimized((v) => !v)}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <div className="hidden">
        <div ref={iframeContainerRef} />
      </div>
    </>
  );
}
