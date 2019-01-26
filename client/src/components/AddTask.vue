<template>
  <v-dialog v-model="show_add_task" max-width="350" persistent>
    <v-container>
      <v-card>
        <v-btn light small absolute top right fab @click="close">
          <v-icon>close</v-icon>
        </v-btn>

        <v-card-title class="headline">Add Task</v-card-title>

        <form>
          <v-card-text>
            <v-text-field
              v-model="title"
              :error-messages="titleErrors"
              label="Title"
              required
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="description"
              :error-messages="descriptionErrors"
              label="Description"
              required
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="points"
              :error-messages="pointsErrors"
              label="Points"
              required
              @input="$v.points.$touch()"
              @blur="$v.points.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="to"
              :error-messages="toErrors"
              label="Assign To"
              required
              @input="$v.to.$touch()"
              @blur="$v.to.$touch()"
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-card-text>

          <v-card-actions>
            <v-layout row wrap>
              <v-flex md4>
                <v-btn color="green darken-1" @click="submit">Save</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </form>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minValue, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    title: { required },
    description: { required },
    points: { required, minValue, numeric },
    to: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },
  props: ["show_add_task"],
  data: () => ({
    title: "",
    description: "",
    points: null,
    to: "",
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push("Description is required");
      return errors;
    },
    pointsErrors() {
      const errors = [];
      if (!this.$v.points.$dirty) return errors;
      !this.$v.points.required && errors.push("Points is required.");
      !this.$v.points.minValue && errors.push("Points must greater than 0.");
      !this.$v.points.numeric && errors.push("Points must in numeric.");
      return errors;
    },
    toErrors() {
      const errors = [];
      if (!this.$v.to.$dirty) return errors;
      !this.$v.to.required && errors.push("Assign To is required.");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$firestore
          .collection("tasks")
          .add({
            title: this.title,
            description: this.description,
            points: this.points,
            to: this.to,
            status: 0,
            created: new Date()
          })
          .then(() => {
            this.$toast.fire({
              title: "Add Task Success",
              type: "success"
            });
            this.$emit("hide_add_task");
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    close() {
      this.$v.$reset();
      this.title = "";
      this.description = "";
      this.checkbox = false;
      this.$emit("hide_add_task");
    }
  }
};
</script>
