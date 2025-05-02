<template>
    <div class="h-full py-36 bg-gradient-to-tr flex items-center justify-center to-[#003500] from-[#11FF00]">
        <div class="container flex flex-col px-4 items-center justify-center w-full text-white">
            <h1 class="text-4xl font-title">Visi & Misi</h1>
            <p class="text-xl pb-4 text-center">Komitmen kami untuk memberikan pelayanan terbaik bagi jamaah</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div class="p-5 text-black col-span-1 bg-white rounded-2xl">
                    <p class="text-xl font-title">Visi</p>
                    <p>Menjadi penyedia layanan perjalanan ibadah umrah dan haji yang terpercaya, profesional, dan
                        mengutamakan kenyamanan jamaah dalam menunaikan ibadah suci.</p>
                </div>
                <div class="p-5 bg-white text-black col-span-1 rounded-2xl">
                    <p class="font-title text-xl">Misi</p>
                    <table class="">
                        <tbody>
                            <tr>
                                <td class="p-2 text-center">
                                    <CircleCheck class="w-7 h-7 text-[#34AF5B]" />
                                </td>
                                <td class="p-2">
                                    Menjadi penyedia layanan perjalanan ibadah umrah dan haji yang terpercaya,
                                    profesional,
                                    dan mengutamakan kenyamanan jamaah dalam menunaikan ibadah suci.
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2">
                                    <CircleCheck class="w-7 h-7 text-[#34AF5B]" />
                                </td>
                                <td class="p-2">Menyediakan bimbingan ibadah yang
                                    komprehensif dan sesuai syariat</td>
                            </tr>
                            <tr>
                                <td class="p-2">
                                    <CircleCheck class="w-7 h-7 text-[#34AF5B]" />

                                </td>
                                <td class="p-2">
                                    Menjalin kerjasama dengan mitra terpercaya untuk menjamin kualitas layanan
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 text-center">
                                    <CircleCheck class="w-7 h-7 text-[#34AF5B]" />
                                </td>
                                <td class="p-2">Menghadirkan pengalaman perjalanan ibadah yang nyaman dan berkesan</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next';

</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>