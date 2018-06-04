<template>
    <button type="button" id="detail-close" class="close"
            style="font-size: 30px;position: absolute;top: 2px;right: 5px;"
            aria-label="Close"
            @click="$emit('close')">
        <span aria-hidden="true">&times;</span>
    </button>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
