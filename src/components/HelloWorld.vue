<template>
  <div class="hello-world">
    <h1>Welcome to the Vue-Starter-Project!</h1>
    <p>This project uses Vue3 (<a href="https://vuejs.org/guide/extras/composition-api-faq" target="_blank">
      <strong>Composition API</strong>
    </a>) + Vite</p>
    <p>
      <a href="https://vuejs.org/" target="_blank"><strong>Vue docs</strong></a> /
      <a href="https://primevue.org/" target="_blank"><strong>PrimeVue docs</strong></a>
    </p>
    <Button :severity="n%2 ? 'danger' : 'primary'" @click="increment">Click me!</Button>
    <p v-if="n > 0">You clicked the button {{ n }} time{{ n > 1 ? 's' : '' }}!</p>
    <hr>
    <div class="task-definition">
      <h2>Aufgabenstellung</h2>
      <p>Erstelle eine Liste von Produkt Teasern mithilfe von Vue Komponenten. Die Komponenten sollen so konzipiert
        werden, als wären sie Teil eines größeren Projektes, der Code soll insofern sauber sein. Achte besonders auf
        folgende Aspekte:</p>
      <ul>
        <li>Saubere Typisierung</li>
        <li>Saubere funktionale Abtrennung (MVC)</li>
        <li>Saubere responsive Darstellung</li>
        <li>Accessibility</li>
      </ul>

      <p>Die Komponente(n) soll sich sich vom Inhalt & Style her möglichst nahe an diesem Beispiel orientieren
        (fonts sind egal): <a href="https://www.speluca.ch/" target="_blank">https://www.speluca.ch/</a><br>
      </p>
      <img src="../assets/demo.png"/>
      <p>Die Liste soll weiters über eine <strong>Sortier- und Filterfunktion</strong> verfügen.
        Style & Funktionsumfang nach eigenem ermessen.</p>
      <p>Die in diesem Projekt vorinstallierten Packages können nach belieben verwendet werden, es können auch weitere
        Packages installiert werden sofern notwendig. Die installation weiterer Packages sollte sich jedoch auf ein
        minimum beschränken. Der Einsatz von AI Tools oder anderen Hilfsmitteln ist gestattet, die damit erstellten
        Codestellen sollen aber erklärbar sein.</p>
      <p>Für die Daten kannst du die in diesem Projekt vorhandenen Mock Daten verwenden. Etwaige Unklarheiten können
        nach eigenem Ermessen ergänzt und adaptiert werden, kreative Lösungen sind erwünscht!</p>
      <p>Arbeite so weit du kommst, die Komponente(n) müssen nicht zwingend 100% fertig werden. Wir werden das
        Geschaffte und Ausblick auf die restlichen Punkte am Ende zusammen durchbesprechen.</p>
      <p><strong>Frohes Schaffen!</strong></p>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "primevue/button";
import {ref} from "vue";

export default {
  name: "HelloWorld",
  components: {Button},
  setup() {
    const n = ref(0);
    const increment = () => n.value++;
    return {
      n,
      increment
    }
  }
}
</script>

<style lang="scss" scoped>
.hello-world {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-definition {
  width: 600px;

  img {
    max-width: 100%;
  }
}
</style>