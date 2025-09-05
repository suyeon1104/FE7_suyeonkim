const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const getSunIcon = async () => {
    await delay(1000);
    return "sun";
}

const getWaveIcon = async () => {
    await delay(1000);
    return "wave";
}

const getCloudIcon = async () => {
    await delay(1000);
    return "cloud";
}
const getAllWeatherIcons = () => {
    getSunIcon().then((sun) => {
        return getWaveIcon().then(wave => {
            return getCloudIcon().then(cloud => {
                console.log(1, sun, wave, cloud);
            });
        });
    })
};

// 병렬로
const getAllWeatherIconAsync = async () => {
    console.time(1);

    const sunPromsie = getSunIcon();
    const wavePromsie = getWaveIcon();
    const cloudPromsie = getCloudIcon();

    const sun = await sunPromsie; // 1s
    const wave = await wavePromsie; // 1s
    const cloud = await cloudPromsie; // 1s
    console.log(2, sun, wave, cloud);
    console.timeEnd(1);
};
getAllWeatherIcons();
console.log("hello");


const getAllWeatherIconAsyncs = async () => {
    console.time(2);
    const [sun, wave, cloud] = await Promise.allSettled([ // all race allSettled
        getSunIcon(), getWaveIcon(), getCloudIcon(),
    ]);
    console.log(3, sun, wave, cloud);
    console.timeEnd(2);
};
getAllWeatherIconAsync();
getAllWeatherIconAsyncs();
console.log("hello");