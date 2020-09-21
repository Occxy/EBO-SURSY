<?php
# src/Entity/Animalcharacteristics.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Animalcharacteristics
 *
 * @ORM\Table(name="animalcharacteristics", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Animalcharacteristics
{
    /**
     * @var string
     *
     * @ORM\Column(name="NIdent", type="string", length=255, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $nident;

    /**
     * @var float
     *
     * @ORM\Column(name="Weigth", type="float", precision=10, scale=0, nullable=true)
     */
    private $weigth;

    /**
     * @var float
     *
     * @ORM\Column(name="Forearm", type="float", precision=10, scale=0, nullable=true)
     */
    private $forearm;

    /**
     * @var float
     *
     * @ORM\Column(name="TotalBodyL", type="float", precision=10, scale=0, nullable=true)
     */
    private $totalbodyl;

    /**
     * @var float
     *
     * @ORM\Column(name="TailL", type="float", precision=10, scale=0, nullable=true)
     */
    private $taill;

    /**
     * @var boolean
     *
     * @ORM\Column(name="Tailcut", type="boolean", nullable=true)
     */
    private $tailcut;

    /**
     * @var float
     *
     * @ORM\Column(name="HeadL", type="float", precision=10, scale=0, nullable=true)
     */
    private $headl;

    /**
     * @var float
     *
     * @ORM\Column(name="EarL", type="float", precision=10, scale=0, nullable=true)
     */
    private $earl;

    /**
     * @var float
     *
     * @ORM\Column(name="EarW", type="float", precision=10, scale=0, nullable=true)
     */
    private $earw;

    /**
     * @var float
     *
     * @ORM\Column(name="Metacarpe3L", type="float", precision=10, scale=0, nullable=true)
     */
    private $metacarpe3l;

    /**
     * @var float
     *
     * @ORM\Column(name="FirstPhal3rdFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $firstphal3rdfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="SecondPhal3rdFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $secondphal3rdfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="FirstPhal4thFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $firstphal4thfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="SecondPhal4thFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $secondphal4thfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="FirstPhal5thFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $firstphal5thfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="SecondPhal5thFinger", type="float", precision=10, scale=0, nullable=true)
     */
    private $secondphal5thfinger;

    /**
     * @var float
     *
     * @ORM\Column(name="LeftBackFeetL", type="float", precision=10, scale=0, nullable=true)
     */
    private $leftbackfeetl;

    /**
     * @var string
     *
     * @ORM\Column(name="EyesSize", type="string", length=255, nullable=true)
     */
    private $eyessize;

    /**
     * @var string
     *
     * @ORM\Column(name="BackLegShape", type="string", length=255, nullable=true)
     */
    private $backlegshape;

    /**
     * @var boolean
     *
     * @ORM\Column(name="BackLegHeary", type="boolean", nullable=true)
     */
    private $backlegheary;

    /**
     * @var string
     *
     * @ORM\Column(name="EarsShape", type="string", length=255, nullable=true)
     */
    private $earsshape;

    /**
     * @var string
     *
     * @ORM\Column(name="DorsalPelage", type="string", length=255, nullable=true)
     */
    private $dorsalpelage;

    /**
     * @var string
     *
     * @ORM\Column(name="LimitPelage", type="string", length=255, nullable=true)
     */
    private $limitpelage;

    /**
     * @var string
     *
     * @ORM\Column(name="VentralPelage", type="string", length=255, nullable=true)
     */
    private $ventralpelage;

    /**
     * @var string
     *
     * @ORM\Column(name="TailShape", type="string", length=255, nullable=true)
     */
    private $tailshape;



    /**
     * Get nident
     *
     * @return string
     */
    public function getNident()
    {
        return $this->nident;
    }

    /**
     * Set weigth
     *
     * @param float $weigth
     *
     * @return Animalcharacteristics
     */
    public function setWeigth($weigth)
    {
        $this->weigth = $weigth;

        return $this;
    }

    /**
     * Get weigth
     *
     * @return float
     */
    public function getWeigth()
    {
        return $this->weigth;
    }

    /**
     * Set forearm
     *
     * @param float $forearm
     *
     * @return Animalcharacteristics
     */
    public function setForearm($forearm)
    {
        $this->forearm = $forearm;

        return $this;
    }

    /**
     * Get forearm
     *
     * @return float
     */
    public function getForearm()
    {
        return $this->forearm;
    }

    /**
     * Set totalbodyl
     *
     * @param float $totalbodyl
     *
     * @return Animalcharacteristics
     */
    public function setTotalbodyl($totalbodyl)
    {
        $this->totalbodyl = $totalbodyl;

        return $this;
    }

    /**
     * Get totalbodyl
     *
     * @return float
     */
    public function getTotalbodyl()
    {
        return $this->totalbodyl;
    }

    /**
     * Set taill
     *
     * @param float $taill
     *
     * @return Animalcharacteristics
     */
    public function setTaill($taill)
    {
        $this->taill = $taill;

        return $this;
    }

    /**
     * Get taill
     *
     * @return float
     */
    public function getTaill()
    {
        return $this->taill;
    }

    /**
     * Set tailcut
     *
     * @param boolean $tailcut
     *
     * @return Animalcharacteristics
     */
    public function setTailcut($tailcut)
    {
        $this->tailcut = $tailcut;

        return $this;
    }

    /**
     * Get tailcut
     *
     * @return boolean
     */
    public function getTailcut()
    {
        return $this->tailcut;
    }

    /**
     * Set headl
     *
     * @param float $headl
     *
     * @return Animalcharacteristics
     */
    public function setHeadl($headl)
    {
        $this->headl = $headl;

        return $this;
    }

    /**
     * Get headl
     *
     * @return float
     */
    public function getHeadl()
    {
        return $this->headl;
    }

    /**
     * Set earl
     *
     * @param float $earl
     *
     * @return Animalcharacteristics
     */
    public function setEarl($earl)
    {
        $this->earl = $earl;

        return $this;
    }

    /**
     * Get earl
     *
     * @return float
     */
    public function getEarl()
    {
        return $this->earl;
    }

    /**
     * Set earw
     *
     * @param float $earw
     *
     * @return Animalcharacteristics
     */
    public function setEarw($earw)
    {
        $this->earw = $earw;

        return $this;
    }

    /**
     * Get earw
     *
     * @return float
     */
    public function getEarw()
    {
        return $this->earw;
    }

    /**
     * Set metacarpe3l
     *
     * @param float $metacarpe3l
     *
     * @return Animalcharacteristics
     */
    public function setMetacarpe3l($metacarpe3l)
    {
        $this->metacarpe3l = $metacarpe3l;

        return $this;
    }

    /**
     * Get metacarpe3l
     *
     * @return float
     */
    public function getMetacarpe3l()
    {
        return $this->metacarpe3l;
    }

    /**
     * Set firstphal3rdfinger
     *
     * @param float $firstphal3rdfinger
     *
     * @return Animalcharacteristics
     */
    public function setFirstphal3rdfinger($firstphal3rdfinger)
    {
        $this->firstphal3rdfinger = $firstphal3rdfinger;

        return $this;
    }

    /**
     * Get firstphal3rdfinger
     *
     * @return float
     */
    public function getFirstphal3rdfinger()
    {
        return $this->firstphal3rdfinger;
    }

    /**
     * Set secondphal3rdfinger
     *
     * @param float $secondphal3rdfinger
     *
     * @return Animalcharacteristics
     */
    public function setSecondphal3rdfinger($secondphal3rdfinger)
    {
        $this->secondphal3rdfinger = $secondphal3rdfinger;

        return $this;
    }

    /**
     * Get secondphal3rdfinger
     *
     * @return float
     */
    public function getSecondphal3rdfinger()
    {
        return $this->secondphal3rdfinger;
    }

    /**
     * Set firstphal4thfinger
     *
     * @param float $firstphal4thfinger
     *
     * @return Animalcharacteristics
     */
    public function setFirstphal4thfinger($firstphal4thfinger)
    {
        $this->firstphal4thfinger = $firstphal4thfinger;

        return $this;
    }

    /**
     * Get firstphal4thfinger
     *
     * @return float
     */
    public function getFirstphal4thfinger()
    {
        return $this->firstphal4thfinger;
    }

    /**
     * Set secondphal4thfinger
     *
     * @param float $secondphal4thfinger
     *
     * @return Animalcharacteristics
     */
    public function setSecondphal4thfinger($secondphal4thfinger)
    {
        $this->secondphal4thfinger = $secondphal4thfinger;

        return $this;
    }

    /**
     * Get secondphal4thfinger
     *
     * @return float
     */
    public function getSecondphal4thfinger()
    {
        return $this->secondphal4thfinger;
    }

    /**
     * Set firstphal5thfinger
     *
     * @param float $firstphal5thfinger
     *
     * @return Animalcharacteristics
     */
    public function setFirstphal5thfinger($firstphal5thfinger)
    {
        $this->firstphal5thfinger = $firstphal5thfinger;

        return $this;
    }

    /**
     * Get firstphal5thfinger
     *
     * @return float
     */
    public function getFirstphal5thfinger()
    {
        return $this->firstphal5thfinger;
    }

    /**
     * Set secondphal5thfinger
     *
     * @param float $secondphal5thfinger
     *
     * @return Animalcharacteristics
     */
    public function setSecondphal5thfinger($secondphal5thfinger)
    {
        $this->secondphal5thfinger = $secondphal5thfinger;

        return $this;
    }

    /**
     * Get secondphal5thfinger
     *
     * @return float
     */
    public function getSecondphal5thfinger()
    {
        return $this->secondphal5thfinger;
    }

    /**
     * Set leftbackfeetl
     *
     * @param float $leftbackfeetl
     *
     * @return Animalcharacteristics
     */
    public function setLeftbackfeetl($leftbackfeetl)
    {
        $this->leftbackfeetl = $leftbackfeetl;

        return $this;
    }

    /**
     * Get leftbackfeetl
     *
     * @return float
     */
    public function getLeftbackfeetl()
    {
        return $this->leftbackfeetl;
    }

    /**
     * Set eyessize
     *
     * @param string $eyessize
     *
     * @return Animalcharacteristics
     */
    public function setEyessize($eyessize)
    {
        $this->eyessize = $eyessize;

        return $this;
    }

    /**
     * Get eyessize
     *
     * @return string
     */
    public function getEyessize()
    {
        return $this->eyessize;
    }

    /**
     * Set backlegshape
     *
     * @param string $backlegshape
     *
     * @return Animalcharacteristics
     */
    public function setBacklegshape($backlegshape)
    {
        $this->backlegshape = $backlegshape;

        return $this;
    }

    /**
     * Get backlegshape
     *
     * @return string
     */
    public function getBacklegshape()
    {
        return $this->backlegshape;
    }

    /**
     * Set backlegheary
     *
     * @param boolean $backlegheary
     *
     * @return Animalcharacteristics
     */
    public function setBacklegheary($backlegheary)
    {
        $this->backlegheary = $backlegheary;

        return $this;
    }

    /**
     * Get backlegheary
     *
     * @return boolean
     */
    public function getBacklegheary()
    {
        return $this->backlegheary;
    }

    /**
     * Set earsshape
     *
     * @param string $earsshape
     *
     * @return Animalcharacteristics
     */
    public function setEarsshape($earsshape)
    {
        $this->earsshape = $earsshape;

        return $this;
    }

    /**
     * Get earsshape
     *
     * @return string
     */
    public function getEarsshape()
    {
        return $this->earsshape;
    }

    /**
     * Set dorsalpelage
     *
     * @param string $dorsalpelage
     *
     * @return Animalcharacteristics
     */
    public function setDorsalpelage($dorsalpelage)
    {
        $this->dorsalpelage = $dorsalpelage;

        return $this;
    }

    /**
     * Get dorsalpelage
     *
     * @return string
     */
    public function getDorsalpelage()
    {
        return $this->dorsalpelage;
    }

    /**
     * Set limitpelage
     *
     * @param string $limitpelage
     *
     * @return Animalcharacteristics
     */
    public function setLimitpelage($limitpelage)
    {
        $this->limitpelage = $limitpelage;

        return $this;
    }

    /**
     * Get limitpelage
     *
     * @return string
     */
    public function getLimitpelage()
    {
        return $this->limitpelage;
    }

    /**
     * Set ventralpelage
     *
     * @param string $ventralpelage
     *
     * @return Animalcharacteristics
     */
    public function setVentralpelage($ventralpelage)
    {
        $this->ventralpelage = $ventralpelage;

        return $this;
    }

    /**
     * Get ventralpelage
     *
     * @return string
     */
    public function getVentralpelage()
    {
        return $this->ventralpelage;
    }

    /**
     * Set tailshape
     *
     * @param string $tailshape
     *
     * @return Animalcharacteristics
     */
    public function setTailshape($tailshape)
    {
        $this->tailshape = $tailshape;

        return $this;
    }

    /**
     * Get tailshape
     *
     * @return string
     */
    public function getTailshape()
    {
        return $this->tailshape;
    }
}
