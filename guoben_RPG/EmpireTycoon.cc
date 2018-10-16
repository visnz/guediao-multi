#include "EmpireTycoon.h"
#include <node.h>
#include <v8.h>
#include <time.h>
#include <iostream>
#include <string>
using namespace v8;
using namespace std;

All j;

void hello(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
//  Local<Object> obj = Object::New(isolate);
//  obj->Set(String::NewFromUtf8(isolate, " hahaha "), args[1]->ToString());

//  int value = args[0]->NumberValue() + args[1]->NumberValue();
//  Local<Number> num = Number::New(isolate, value);

String::Utf8Value param1(args[0]->ToString());
String::Utf8Value param2(args[1]->ToString());
String::Utf8Value param3(args[2]->ToString());
String::Utf8Value param4(args[3]->ToString());
//cout<<"======================CC run:  "<<string(*param1)<<","<<string(*param2)<<","<<string(*param3)<<","<<string(*param4)<<endl;
string ret=j.engine(string(*param1),string(*param2),string(*param3),string(*param4));
Handle<Value> str = String::NewFromUtf8(isolate, ret.c_str() );

//Local<String> str= String::NewFromUtf8(isolate,"sss");
//cout<<"=======================CC return:  "<<ret<<endl;
args.GetReturnValue().Set(str);

}

void init(Handle<Object> exports) {
  NODE_SET_METHOD(exports, "hello", hello);
}

NODE_MODULE(hellotest, init);
