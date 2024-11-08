---
layout: doc
---

<script setup>
  import {data as abouts} from './about/about.data';
  import { withBase } from 'vitepress';
</script>

# Members

<ul v-if="abouts.length > 0">
  <li v-for="about of abouts">
    <a :href="withBase(about.url)">{{ about.frontmatter.title }}</a>
  </li>
</ul>

<li> Heather Park </li>
<li> Kevin Tang </li>