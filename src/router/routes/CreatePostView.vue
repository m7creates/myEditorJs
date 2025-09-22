<template>
    <h3>Create a post below</h3>
    <div id="editorjs"></div>
    <button @click="createPost">Submit</button>
</template>

<script setup>
    import EditorJS from '@editorjs/editorjs';
    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {},
        placeholder: 'Let\'s write an awesome story!',
        autofocus: true,
    })



    function createPost (){
        
    }
</script>