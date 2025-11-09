const ballSublabel = '<template>\n  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">\n    <BaseSwitchBall\n      v-model="value"\n      label="Primary"\n      sublabel="\u0627\u06CC\u0646 \u06CC\u06A9 \u0633\u0648\u0626\u06CC\u0686 \u0627\u0635\u0644\u06CC \u0627\u0633\u062A"\n      color="primary"\n    />\n  </div>\n</template>\n\n<script setup lang="ts">\nconst value = ref(true)\n<\/script>\n';

export { ballSublabel as default };
