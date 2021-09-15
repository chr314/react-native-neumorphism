package com.reactnativeneumorphism

import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import androidx.coordinatorlayout.widget.CoordinatorLayout
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp
import soup.neumorphism.NeumorphCardView

class NeumorphismCardViewManager : ViewGroupManager<CoordinatorLayout>() {
  override fun getName() = "NeumorphismCardView"

  private lateinit var card: NeumorphCardView
  private var appearance = soup.neumorphism.NeumorphShapeAppearanceModel.builder()


  override fun createViewInstance(reactContext: ThemedReactContext): CoordinatorLayout {
    val view = LayoutInflater.from(reactContext).inflate(
      R.layout.card_view,
      null
    ) as CoordinatorLayout

    card = view.findViewById(R.id.card)

    return view
  }

  @ReactProp(name = "lightColor")
  fun setLightColor(view: View, color: String) {
    card.setShadowColorLight(Color.parseColor(color))
  }

  @ReactProp(name = "darkColor")
  fun setDarkColor(view: View, color: String) {
    card.setShadowColorDark(Color.parseColor(color))
  }

  @ReactProp(name = "color")
  fun setColor(view: View, color: String) {
    card.setBackgroundColor(Color.parseColor(color))
  }

  @ReactProp(name = "radius")
  fun setRadius(view: View, radius: Float) {
    card.setShapeAppearanceModel(appearance.setCornerRadius(radius).build())
  }

  @ReactProp(name = "shapeType")
  fun setShapeType(view: View, shapeType: String) {
    val newShape = when (shapeType) {
      "flat" -> 0
      "pressed" -> 1
      "basin" -> 2
      else -> 0
    }
    card.setShapeType(newShape)
  }

  @ReactProp(name = "lightSource")
  fun setLightSource(view: View, lightSource: String) {
    val newLightSource = when (lightSource) {
      "leftTop" -> 0
      "leftBottom" -> 1
      "rightTop" -> 2
      "rightBottom" -> 3
      else -> 0
    }
    card.setLightSource(newLightSource)
  }

  override fun addView(parent: CoordinatorLayout?, child: View?, index: Int) {
    val container = parent?.findViewById<CoordinatorLayout>(R.id.container)
    if (container != null) {
      if (container.childCount > 0) {
        container.removeAllViews()
      }
      container.addView(child, index)
    }
  }
}
