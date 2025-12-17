"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export const BackgroundWrapper = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    // Theme colors
    const themeColors = {
        dark: {
            backgroundColor: 0x0a0a0a,
            color: 0xb026ff, // neon purple
        },
        light: {
            backgroundColor: 0xffffff,
            color: 0x6366f1, // indigo for light mode
        },
    };

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
                        color: themeColors[theme].color,
                        backgroundColor: themeColors[theme].backgroundColor,
                        points: 10.0,
                        maxDistance: 20.0,
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
    }, []);

    // Update Vanta colors when theme changes
    useEffect(() => {
        if (vantaEffect) {
            vantaEffect.setOptions({
                color: themeColors[theme].color,
                backgroundColor: themeColors[theme].backgroundColor,
            });
        }
    }, [theme, vantaEffect]);

    return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full transition-colors duration-500" />;
};

