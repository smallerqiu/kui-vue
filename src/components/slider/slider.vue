<template>
    <div class="k-slider">
        <div class="k-slider-wrap">
            <div class="k-slider-bar"></div>
            <sliderButton></sliderButton>
        </div>
    </div>
</template>
<script>
import sliderButton from "./sliderButton";
export default {
    name: "Slider",
    components: { sliderButton },
    porps: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        value: { type: [Number, Array], default: 0 }
    },
};
</script>
