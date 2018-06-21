<template>
    <div class="container" id="loginMain">
        <form class="col-md-6 col-md-push-3" @submit.prevent="jump">
            <div class="form-group">
                <label for="InputUser">用户名</label>
                <input v-model="username" class="form-control" id="InputUser" placeholder="用户名">
            </div>
            <div class="form-group">
                <label for="InputPassword">密码</label>
                <input type="password" v-model="pwd" class="form-control" id="InputPassword"
                       placeholder="密码">
            </div>
            <button type="submit" class="btn btn-default">登录</button>
        </form>
    </div>
</template>

<script>

    import {userLogin} from "../api/user";
    import apiConf from "../api/api.conf";
    import {mapMutations} from 'vuex'

    export default {
        name: "login",

        data() {
            return {
                username: '',
                pwd: ''
            }
        },
        created() {
            if (true) {
                //this.jump();
                // this.$router.push({name: 'facManage'})
                this.setUser({name:'123'});

            }
        },
        mounted() {
            this.threeWave('loginMain');
        },
        methods: {
            ...mapMutations(['setUser']),
            jump() {
                this.formCheck() && this.login(this.username, this.pwd)
                //&& this.$router.push({name: 'mapCtrl'});
            },
            login(u, p) {
                userLogin(u, p).then((res) => {
                    //console.log(res.data);
                    if (res.data.code == apiConf.errorCode) {
                        this.$Modal.error({
                            title: '登录失败',
                            content: res.data.msg || '未知错误'
                        });
                    } else if (res.data.code == apiConf.successCode) {
                        console.log(res.data.data);
                        if (res.data.data.type == 0) {
                            this.$router.push({name: 'facManage', params: {id: res.data.data.id}});
                        }
                    }
                })
            },
            formCheck() {
                if (this.username == '') {
                    this.$Modal.error({
                        title: '填写不完整',
                        content: '用户名不能为空'
                    });
                    return false;
                }
                if (this.pwd == '') {
                    this.$Modal.error({
                        title: '填写不完整',
                        content: '密码不能为空'
                    });
                    return false;
                }
                return true;
            },
            threeWave(id) {
                var SEPARATION = 90,
                    AMOUNTX = 50,
                    AMOUNTY = 40;

                var container;
                var camera, scene, renderer;

                var particles, particle, count = 0;

                var mouseX = 85,
                    mouseY = -342;

                var windowHalfX = window.innerWidth / 1.8;
                var windowHalfY = window.innerHeight / 1.8;

                init();
                animate();

                function init() {

                    container = document.createElement('div');
                    document.getElementById(id).appendChild(container);
                    container.style.position = 'absolute';
                    container.style.width = '98%';
                    container.style.height = '98%';
                    container.style.top = '0';
                    container.style.left = '0';

                    camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
                    camera.position.z = 1000;

                    scene = new THREE.Scene();

                    particles = new Array();

                    var PI2 = Math.PI * 2;
                    var material = new THREE.ParticleCanvasMaterial({

                        color: 0xe1e1e1,
                        program: function (context) {

                            context.beginPath();
                            context.arc(0, 0, .6, 0, PI2, true);
                            context.fill();

                        }

                    });

                    var i = 0;

                    for (var ix = 0; ix < AMOUNTX; ix++) {

                        for (var iy = 0; iy < AMOUNTY; iy++) {

                            particle = particles[i++] = new THREE.Particle(material);
                            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                            particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                            scene.add(particle);

                        }

                    }

                    renderer = new THREE.CanvasRenderer();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    container.appendChild(renderer.domElement);

                    document.addEventListener('mousemove', onDocumentMouseMove, false);
                    document.addEventListener('touchstart', onDocumentTouchStart, false);
                    document.addEventListener('touchmove', onDocumentTouchMove, false);

                    //

                    window.addEventListener('resize', onWindowResize, false);

                }

                function onWindowResize() {

                    windowHalfX = window.innerWidth / 2;
                    windowHalfY = window.innerHeight / 2;

                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();

                    renderer.setSize(window.innerWidth, window.innerHeight);

                }

                //

                function onDocumentMouseMove(event) {

                    mouseX = event.clientX - windowHalfX;
                    mouseY = event.clientY - windowHalfY;

                }

                function onDocumentTouchStart(event) {

                    if (event.touches.length === 1) {

                        event.preventDefault();

                        mouseX = event.touches[0].pageX - windowHalfX;
                        mouseY = event.touches[0].pageY - windowHalfY;

                    }

                }

                function onDocumentTouchMove(event) {

                    if (event.touches.length === 1) {

                        event.preventDefault();

                        mouseX = event.touches[0].pageX - windowHalfX;
                        mouseY = event.touches[0].pageY - windowHalfY;

                    }

                }

                //

                function animate() {

                    requestAnimationFrame(animate);

                    render();


                }

                function render() {

                    camera.position.x += (mouseX - camera.position.x) * .05;
                    camera.position.y += (-mouseY - camera.position.y) * .05;
                    camera.lookAt(scene.position);

                    var i = 0;

                    for (var ix = 0; ix < AMOUNTX; ix++) {

                        for (var iy = 0; iy < AMOUNTY; iy++) {

                            particle = particles[i++];
                            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;

                        }

                    }

                    renderer.render(scene, camera);

                    count += 0.1;

                }
            }
        }
    }
</script>

<style scoped>

    div.container {
        color: #fff;
        padding-top: 20%;

    }

    form {
        margin: 0 auto;
        z-index: 99;
        font-size: 1.2em;
    }
</style>