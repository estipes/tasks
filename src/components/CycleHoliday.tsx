import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsPrefixProps } from "react-bootstrap/esm/helpers";

export function CycleHoliday(): JSX.Element {
    const aEmojis: string[] = ["🐲", "🎄", "🎃", "🍀", "💝"];
    const dEmojis: string[] = ["🐲", "💝", "🍀", "🎃", "🎄"];
    const [emoji, setEmoji] = useState<string>("🐲");

    function alphaEmoji(): void {
        const newIndex = aEmojis.findIndex(
            (emo: string): boolean => emo === emoji
        );
        if (newIndex === 4) {
            setEmoji(aEmojis[0]);
        } else {
            setEmoji(aEmojis[newIndex + 1]);
        }
    }
    function dateEmoji(): void {
        const newIndex = dEmojis.findIndex(
            (emo: string): boolean => emo === emoji
        );
        if (newIndex === 4) {
            setEmoji(dEmojis[0]);
        } else {
            setEmoji(dEmojis[newIndex + 1]);
        }
    }
    return (
        <div>
            <button onClick={alphaEmoji}>Alphabet Advance</button>
            <button onClick={dateEmoji}>Year Advance</button>
            <span>Holiday: {emoji}</span>
        </div>
    );
}
