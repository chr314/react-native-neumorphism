package com.reactnativeneumorphism

import android.graphics.Color
import android.view.View
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp
import soup.neumorphism.NeumorphCardView

class NeumorphismCardViewManager : ViewGroupManager<NeumorphCardView>() {
  override fun getName() = "NeumorphismCardView"

  private var appearance = soup.neumorphism.NeumorphShapeAppearanceModel.builder()


  override fun createViewInstance(reactContext: ThemedReactContext): NeumorphCardView {
    val view = NeumorphCardView(reactContext)
    view.setInset(0,0,0,0)
    view.setPadding(0,0,0,0)
    return view
  }

  @ReactProp(name = "lightColor")
  fun setLightColor(view: NeumorphCardView, color: String) {
    view.setShadowColorLight(Color.parseColor(color))
  }

  @ReactProp(name = "darkColor")
  fun setDarkColor(view: NeumorphCardView, color: String) {
    view.setShadowColorDark(Color.parseColor(color))
  }

  @ReactProp(name = "color")
  fun setColor(view: NeumorphCardView, color: String) {
    view.setBackgroundColor(Color.parseColor(color))
  }

  @ReactProp(name = "radius")
  fun setRadius(view: NeumorphCardView, radius: Float) {
    view.setShapeAppearanceModel(appearance.setCornerRadius(radius).build())
  }

  @ReactProp(name = "shapeType")
  fun setShapeType(view: NeumorphCardView, shapeType: String) {
    val newShape = when (shapeType) {
      "flat" -> 0
      "pressed" -> 1
      "basin" -> 2
      else -> 0
    }
    view.setShapeType(newShape)
  }

  @ReactProp(name = "lightSource")
  fun setLightSource(view: NeumorphCardView, lightSource: String) {
    val newLightSource = when (lightSource) {
      "leftTop" -> 0
      "leftBottom" -> 1
      "rightTop" -> 2
      "rightBottom" -> 3
      else -> 0
    }
    view.setLightSource(newLightSource)
  }
}
