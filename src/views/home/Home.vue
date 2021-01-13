<template>
    <div class="bigBox">
        <el-row :gutter="20" class="el-row">
            <el-col :span="8">
                <el-tabs type="border-card" :style="{height: wh+'px'}">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="16">
                <div>
                    <el-card>
                        <div slot="header">
                            <span>展示</span>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wh: null
            }
        },
        mounted() {
            this.wh = window.innerHeight * (95 / 100)
        }
    }
</script>

<style lang="scss" scoped>
    .bigBox {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        height: auto;
    }

    .el-row {
        padding: 5px 10px 0 10px;
        position: absolute;
        width: 100%;
        min-height: 100%;
        height: auto;
    }
</style>
