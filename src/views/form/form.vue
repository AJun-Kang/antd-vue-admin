<template>
  <a-layout-content style="margin: 0 16px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>后台</a-breadcrumb-item>
      <a-breadcrumb-item>表单</a-breadcrumb-item>
    </a-breadcrumb>
    <a-form :model="formState" name="validate_other" v-bind="formItemLayout" @finishFailed="onFinishFailed"
      @finish="onFinish" style="background-color: #fff;padding: 20px ;">
      <a-form-item label="纯文本">
        <span class="ant-form-text">China</span>
      </a-form-item>
      <a-form-item name="select" label="选择框" has-feedback
        :rules="[{ required: true, message: 'Please select your country!' }]">
        <a-select v-model:value="formState.select" placeholder="Please select a country">
          <a-select-option value="china">China</a-select-option>
          <a-select-option value="usa">U.S.A</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item name="select-multiple" label="多选选择框"
        :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]">
        <a-select v-model:value="formState['select-multiple']" mode="multiple"
          placeholder="Please select favourite colors">
          <a-select-option value="red">Red</a-select-option>
          <a-select-option value="green">Green</a-select-option>
          <a-select-option value="blue">Blue</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="数字输入框">
        <a-form-item name="input-number" no-style>
          <a-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
        </a-form-item>
        <span class="ant-form-text">machines</span>
      </a-form-item>

      <a-form-item name="switch" label="Switch">
        <a-switch v-model:checked="formState.switch" />
      </a-form-item>

      <a-form-item name="进度" label="Slider">
        <a-slider v-model:value="formState.slider" :marks="{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }" />
      </a-form-item>

      <a-form-item name="radio-group" label="单选">
        <a-radio-group v-model:value="formState['radio-group']">
          <a-radio value="a">item 1</a-radio>
          <a-radio value="b">item 2</a-radio>
          <a-radio value="c">item 3</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item name="radio-button" label="Radio.Button"
        :rules="[{ required: true, message: 'Please pick an item!' }]">
        <a-radio-group v-model:value="formState['radio-button']">
          <a-radio-button value="a">item 1</a-radio-button>
          <a-radio-button value="b">item 2</a-radio-button>
          <a-radio-button value="c">item 3</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item name="checkbox-group" label="多选">
        <a-checkbox-group v-model:value="formState['checkbox-group']">
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A" style="line-height: 32px">A</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="B" style="line-height: 32px" disabled>B</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C" style="line-height: 32px">C</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D" style="line-height: 32px">D</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E" style="line-height: 32px">E</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="F" style="line-height: 32px">F</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item name="rate" label="评分">
        <a-rate v-model:value="formState.rate" allow-half />
      </a-form-item>

      <a-form-item name="upload" label="上传" extra="longgggggggggggggggggggggggggggggggggg">
        <a-upload v-model:fileList="formState.upload" name="logo" action="/upload.do" list-type="picture">
          <a-button>
            <template #icon>
              <UploadOutlined />
            </template>
            点击上传
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item label="Dragger">
        <a-form-item name="dragger" no-style>
          <a-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
            <p class="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p class="ant-upload-text">单击或拖动文件到此区域进行上传</p>
            <p class="ant-upload-hint">支持单次或批量上传。</p>
          </a-upload-dragger>
        </a-form-item>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </a-layout-content>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const formState = reactive<Record<string, any>>({
  'input-number': 3,
  'checkbox-group': ['A', 'B'],
  rate: 3.5,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
  
  