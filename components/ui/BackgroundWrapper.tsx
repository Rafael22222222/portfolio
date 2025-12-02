"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const BackgroundWrapper = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let effect: any = null;
        const loadVanta = async () => {
            if (!vantaEffect && vantaRef.current) {
                try {
                    // @ts-ignore
                    const NET = (await import("vanta/dist/vanta.net.min")).default;

                    effect = NET({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0xb026ff,
                        backgroundColor: 0x111111,
                        points: 12.0,
                        maxDistance: 22.0,
                        spacing: 18.0,
                        THREE: THREE,
                    });
                    setVantaEffect(effect);
                } catch (error) {
                    console.error("Failed to load Vanta:", error);
                }
            }
        };

        loadVanta();

        return () => {
            if (effect) effect.destroy();
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" />;
};
