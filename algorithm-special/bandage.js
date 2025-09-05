function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const maxHealth = health;
    let curHealth = health;
    let success = 0;

    const attackMap = new Map(attacks.map(([time, dmg]) => [time, dmg]));
    const lastAttackTime = attacks[attacks.length - 1][0];

    for (let sec = 1; sec <= lastAttackTime; sec++) {
        if (attackMap.has(sec)) {
            curHealth -= attackMap.get(sec);
            if (curHealth <= 0) return -1;
            success = 0;
        } else {
            curHealth += x;
            if (curHealth > maxHealth) curHealth = maxHealth;

            success++;
            if (success === t) {
                curHealth += y;
                if (curHealth > maxHealth) curHealth = maxHealth;
                success = 0;
            }
        }
    }

    return curHealth;
}
