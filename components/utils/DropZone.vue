<template>
  <div>
    <div v-if="!file" @drag="onChange">
      <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true" @dragleave="dragging = false">
        <div class="dropZone-info">
          <span class="fa fa-cloud-upload dropZone-title"></span>
          <span class="dropZone-title">{{ $t('files.drop') }}</span>
          <div class="dropZone-upload-limit-info">
            <div>{{ $t('files.max_file_size', { size: readableFileSize(limitSize) }) }}</div>
          </div>
        </div>
        <input type="file" @change="onChange" />
      </div>
    </div>
    <div v-else class="dropZone-uploaded">
      <div class="dropZone-uploaded-info">
        <span class="dropZone-title">{{ file.name }}</span>
        <a class="underline" @click="removeFile">Remove File</a>
      </div>
    </div>
  </div>
</template>

<script>
import filesize from 'filesize'
export default {
  props: {
    limitSize: {
      type: [Number, String],
      default: 5e6
    }
  },
  data: () => ({
    file: '',
    dragging: false
  }),
  methods: {
    readableFileSize(size) {
      return filesize(size, { round: 1 })
    },
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files

      if (!files.length) {
        this.dragging = false
        return
      }

      this.createFile(files[0])
    },
    async createFile(file) {
      if (!file.type.match('image.*')) {
        alert('please select image file')
        this.dragging = false
        return
      }

      if (file.size > +this.limitSize) {
        alert(`please check file size no over ${this.readableFileSize(+this.limitSize)}.`)
        this.dragging = false
        return
      }

      this.file = file
      this.$emit('input', [file])
      this.dragging = false
    },
    removeFile() {
      this.file = ''
    }
  },
  computed: {
    extension() {
      return this.file ? this.file.name.split('.').pop() : ''
    }
  }
}
</script>

<style lang="scss">
.dropZone {
  border-radius: 16px;
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px solid var(--v-primary-base);
  background: rgba(230, 230, 230, 0.62);
  * {
    color: var(--v-primary-base);
  }
}

.dropZone:hover {
  border: 2px solid rgba(black, 0.2);
}

.dropZone:hover .dropZone-title {
  color: #a8a8a8;
}

.dropZone-info {
  color: var(--v-primary-base);
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: var(--v-primary-base);
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: var(--v-primary-base);
}

.dropZone-over {
  background: rgba(230, 230, 230, 0.8);
  opacity: 0.8;
}

.dropZone-uploaded {
  @extend .dropZone;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}
</style>
