<?php
# src/Entity/Testresults.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Testresults
 *
 * @ORM\Table(name="testresults", indexes={@ORM\Index(name="NIdent", columns={"NIdent"})})
 * @ORM\Entity
 */
class Testresults
{
    /**
     * @var integer
     *
     * @ORM\Column(name="N", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $n;

    /**
     * @var string
     *
     * @ORM\Column(name="NIdent", type="string", length=255, nullable=true)
     */
    private $nident;

    /**
     * @var string
     *
     * @ORM\Column(name="MarburgvirusRTPCR", type="string", length=255, nullable=false)
     */
    private $marburgvirusrtpcr;

    /**
     * @var string
     *
     * @ORM\Column(name="MarburgvirusCONVPCR", type="string", length=255, nullable=false)
     */
    private $marburgvirusconvpcr;

    /**
     * @var string
     *
     * @ORM\Column(name="ParamyxovirusFR", type="string", length=255, nullable=true)
     */
    private $paramyxovirusfr;

    /**
     * @var string
     *
     * @ORM\Column(name="ParamyxovirusORG", type="string", length=255, nullable=true)
     */
    private $paramyxovirusorg;

    /**
     * @var string
     *
     * @ORM\Column(name="ParamyxovirusGS", type="string", length=255, nullable=true)
     */
    private $paramyxovirusgs;

    /**
     * @var string
     *
     * @ORM\Column(name="ParamyxovirusCX", type="string", length=255, nullable=true)
     */
    private $paramyxoviruscx;

    /**
     * @var string
     *
     * @ORM\Column(name="ParamyxovirusInt", type="string", length=255, nullable=true)
     */
    private $paramyxovirusint;

    /**
     * @var string
     *
     * @ORM\Column(name="CoronavirusFR", type="string", length=255, nullable=true)
     */
    private $coronavirusfr;

    /**
     * @var string
     *
     * @ORM\Column(name="CoronavirusORG", type="string", length=255, nullable=true)
     */
    private $coronavirusorg;

    /**
     * @var string
     *
     * @ORM\Column(name="CoronavirusGS", type="string", length=255, nullable=true)
     */
    private $coronavirusgs;

    /**
     * @var string
     *
     * @ORM\Column(name="CoronavirusCX", type="string", length=255, nullable=true)
     */
    private $coronaviruscx;

    /**
     * @var string
     *
     * @ORM\Column(name="CoronavirusInt", type="string", length=255, nullable=true)
     */
    private $coronavirusint;

    /**
     * @var string
     *
     * @ORM\Column(name="FlavivirusFR", type="string", length=255, nullable=true)
     */
    private $flavivirusfr;

    /**
     * @var string
     *
     * @ORM\Column(name="FlavivirusORG", type="string", length=255, nullable=true)
     */
    private $flavivirusorg;

    /**
     * @var string
     *
     * @ORM\Column(name="FlavivirusGS", type="string", length=255, nullable=true)
     */
    private $flavivirusgs;

    /**
     * @var string
     *
     * @ORM\Column(name="FlavivirusCX", type="string", length=255, nullable=true)
     */
    private $flaviviruscx;

    /**
     * @var string
     *
     * @ORM\Column(name="FlavivirusInt", type="string", length=255, nullable=true)
     */
    private $flavivirusint;

    /**
     * @var string
     *
     * @ORM\Column(name="AlphavirusFR", type="string", length=255, nullable=true)
     */
    private $alphavirusfr;

    /**
     * @var string
     *
     * @ORM\Column(name="AlphavirusORG", type="string", length=255, nullable=true)
     */
    private $alphavirusorg;

    /**
     * @var string
     *
     * @ORM\Column(name="AlphavirusGS", type="string", length=255, nullable=true)
     */
    private $alphavirusgs;

    /**
     * @var string
     *
     * @ORM\Column(name="AlphavirusCX", type="string", length=255, nullable=true)
     */
    private $alphaviruscx;

    /**
     * @var string
     *
     * @ORM\Column(name="AlphavirusInt", type="string", length=255, nullable=true)
     */
    private $alphavirusint;

    /**
     * @var string
     *
     * @ORM\Column(name="LissavirusFR", type="string", length=255, nullable=true)
     */
    private $lissavirusfr;

    /**
     * @var string
     *
     * @ORM\Column(name="LissavirusORG", type="string", length=255, nullable=true)
     */
    private $lissavirusorg;

    /**
     * @var string
     *
     * @ORM\Column(name="LissavirusGS", type="string", length=255, nullable=true)
     */
    private $lissavirusgs;

    /**
     * @var string
     *
     * @ORM\Column(name="LissavirusCX", type="string", length=255, nullable=true)
     */
    private $lissaviruscx;

    /**
     * @var string
     *
     * @ORM\Column(name="LissavirusInt", type="string", length=255, nullable=true)
     */
    private $lissavirusint;



    /**
     * Get n
     *
     * @return integer
     */
    public function getN()
    {
        return $this->n;
    }

    /**
     * Set nident
     *
     * @param string $nident
     *
     * @return Testresults
     */
    public function setNident($nident)
    {
        $this->nident = $nident;

        return $this;
    }

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
     * Set marburgvirusrtpcr
     *
     * @param string $marburgvirusrtpcr
     *
     * @return Testresults
     */
    public function setMarburgvirusrtpcr($marburgvirusrtpcr)
    {
        $this->marburgvirusrtpcr = $marburgvirusrtpcr;

        return $this;
    }

    /**
     * Get marburgvirusrtpcr
     *
     * @return string
     */
    public function getMarburgvirusrtpcr()
    {
        return $this->marburgvirusrtpcr;
    }

    /**
     * Set marburgvirusconvpcr
     *
     * @param string $marburgvirusconvpcr
     *
     * @return Testresults
     */
    public function setMarburgvirusconvpcr($marburgvirusconvpcr)
    {
        $this->marburgvirusconvpcr = $marburgvirusconvpcr;

        return $this;
    }

    /**
     * Get marburgvirusconvpcr
     *
     * @return string
     */
    public function getMarburgvirusconvpcr()
    {
        return $this->marburgvirusconvpcr;
    }

    /**
     * Set paramyxovirusfr
     *
     * @param string $paramyxovirusfr
     *
     * @return Testresults
     */
    public function setParamyxovirusfr($paramyxovirusfr)
    {
        $this->paramyxovirusfr = $paramyxovirusfr;

        return $this;
    }

    /**
     * Get paramyxovirusfr
     *
     * @return string
     */
    public function getParamyxovirusfr()
    {
        return $this->paramyxovirusfr;
    }

    /**
     * Set paramyxovirusorg
     *
     * @param string $paramyxovirusorg
     *
     * @return Testresults
     */
    public function setParamyxovirusorg($paramyxovirusorg)
    {
        $this->paramyxovirusorg = $paramyxovirusorg;

        return $this;
    }

    /**
     * Get paramyxovirusorg
     *
     * @return string
     */
    public function getParamyxovirusorg()
    {
        return $this->paramyxovirusorg;
    }

    /**
     * Set paramyxovirusgs
     *
     * @param string $paramyxovirusgs
     *
     * @return Testresults
     */
    public function setParamyxovirusgs($paramyxovirusgs)
    {
        $this->paramyxovirusgs = $paramyxovirusgs;

        return $this;
    }

    /**
     * Get paramyxovirusgs
     *
     * @return string
     */
    public function getParamyxovirusgs()
    {
        return $this->paramyxovirusgs;
    }

    /**
     * Set paramyxoviruscx
     *
     * @param string $paramyxoviruscx
     *
     * @return Testresults
     */
    public function setParamyxoviruscx($paramyxoviruscx)
    {
        $this->paramyxoviruscx = $paramyxoviruscx;

        return $this;
    }

    /**
     * Get paramyxoviruscx
     *
     * @return string
     */
    public function getParamyxoviruscx()
    {
        return $this->paramyxoviruscx;
    }

    /**
     * Set paramyxovirusint
     *
     * @param string $paramyxovirusint
     *
     * @return Testresults
     */
    public function setParamyxovirusint($paramyxovirusint)
    {
        $this->paramyxovirusint = $paramyxovirusint;

        return $this;
    }

    /**
     * Get paramyxovirusint
     *
     * @return string
     */
    public function getParamyxovirusint()
    {
        return $this->paramyxovirusint;
    }

    /**
     * Set coronavirusfr
     *
     * @param string $coronavirusfr
     *
     * @return Testresults
     */
    public function setCoronavirusfr($coronavirusfr)
    {
        $this->coronavirusfr = $coronavirusfr;

        return $this;
    }

    /**
     * Get coronavirusfr
     *
     * @return string
     */
    public function getCoronavirusfr()
    {
        return $this->coronavirusfr;
    }

    /**
     * Set coronavirusorg
     *
     * @param string $coronavirusorg
     *
     * @return Testresults
     */
    public function setCoronavirusorg($coronavirusorg)
    {
        $this->coronavirusorg = $coronavirusorg;

        return $this;
    }

    /**
     * Get coronavirusorg
     *
     * @return string
     */
    public function getCoronavirusorg()
    {
        return $this->coronavirusorg;
    }

    /**
     * Set coronavirusgs
     *
     * @param string $coronavirusgs
     *
     * @return Testresults
     */
    public function setCoronavirusgs($coronavirusgs)
    {
        $this->coronavirusgs = $coronavirusgs;

        return $this;
    }

    /**
     * Get coronavirusgs
     *
     * @return string
     */
    public function getCoronavirusgs()
    {
        return $this->coronavirusgs;
    }

    /**
     * Set coronaviruscx
     *
     * @param string $coronaviruscx
     *
     * @return Testresults
     */
    public function setCoronaviruscx($coronaviruscx)
    {
        $this->coronaviruscx = $coronaviruscx;

        return $this;
    }

    /**
     * Get coronaviruscx
     *
     * @return string
     */
    public function getCoronaviruscx()
    {
        return $this->coronaviruscx;
    }

    /**
     * Set coronavirusint
     *
     * @param string $coronavirusint
     *
     * @return Testresults
     */
    public function setCoronavirusint($coronavirusint)
    {
        $this->coronavirusint = $coronavirusint;

        return $this;
    }

    /**
     * Get coronavirusint
     *
     * @return string
     */
    public function getCoronavirusint()
    {
        return $this->coronavirusint;
    }

    /**
     * Set flavivirusfr
     *
     * @param string $flavivirusfr
     *
     * @return Testresults
     */
    public function setFlavivirusfr($flavivirusfr)
    {
        $this->flavivirusfr = $flavivirusfr;

        return $this;
    }

    /**
     * Get flavivirusfr
     *
     * @return string
     */
    public function getFlavivirusfr()
    {
        return $this->flavivirusfr;
    }

    /**
     * Set flavivirusorg
     *
     * @param string $flavivirusorg
     *
     * @return Testresults
     */
    public function setFlavivirusorg($flavivirusorg)
    {
        $this->flavivirusorg = $flavivirusorg;

        return $this;
    }

    /**
     * Get flavivirusorg
     *
     * @return string
     */
    public function getFlavivirusorg()
    {
        return $this->flavivirusorg;
    }

    /**
     * Set flavivirusgs
     *
     * @param string $flavivirusgs
     *
     * @return Testresults
     */
    public function setFlavivirusgs($flavivirusgs)
    {
        $this->flavivirusgs = $flavivirusgs;

        return $this;
    }

    /**
     * Get flavivirusgs
     *
     * @return string
     */
    public function getFlavivirusgs()
    {
        return $this->flavivirusgs;
    }

    /**
     * Set flaviviruscx
     *
     * @param string $flaviviruscx
     *
     * @return Testresults
     */
    public function setFlaviviruscx($flaviviruscx)
    {
        $this->flaviviruscx = $flaviviruscx;

        return $this;
    }

    /**
     * Get flaviviruscx
     *
     * @return string
     */
    public function getFlaviviruscx()
    {
        return $this->flaviviruscx;
    }

    /**
     * Set flavivirusint
     *
     * @param string $flavivirusint
     *
     * @return Testresults
     */
    public function setFlavivirusint($flavivirusint)
    {
        $this->flavivirusint = $flavivirusint;

        return $this;
    }

    /**
     * Get flavivirusint
     *
     * @return string
     */
    public function getFlavivirusint()
    {
        return $this->flavivirusint;
    }

    /**
     * Set alphavirusfr
     *
     * @param string $alphavirusfr
     *
     * @return Testresults
     */
    public function setAlphavirusfr($alphavirusfr)
    {
        $this->alphavirusfr = $alphavirusfr;

        return $this;
    }

    /**
     * Get alphavirusfr
     *
     * @return string
     */
    public function getAlphavirusfr()
    {
        return $this->alphavirusfr;
    }

    /**
     * Set alphavirusorg
     *
     * @param string $alphavirusorg
     *
     * @return Testresults
     */
    public function setAlphavirusorg($alphavirusorg)
    {
        $this->alphavirusorg = $alphavirusorg;

        return $this;
    }

    /**
     * Get alphavirusorg
     *
     * @return string
     */
    public function getAlphavirusorg()
    {
        return $this->alphavirusorg;
    }

    /**
     * Set alphavirusgs
     *
     * @param string $alphavirusgs
     *
     * @return Testresults
     */
    public function setAlphavirusgs($alphavirusgs)
    {
        $this->alphavirusgs = $alphavirusgs;

        return $this;
    }

    /**
     * Get alphavirusgs
     *
     * @return string
     */
    public function getAlphavirusgs()
    {
        return $this->alphavirusgs;
    }

    /**
     * Set alphaviruscx
     *
     * @param string $alphaviruscx
     *
     * @return Testresults
     */
    public function setAlphaviruscx($alphaviruscx)
    {
        $this->alphaviruscx = $alphaviruscx;

        return $this;
    }

    /**
     * Get alphaviruscx
     *
     * @return string
     */
    public function getAlphaviruscx()
    {
        return $this->alphaviruscx;
    }

    /**
     * Set alphavirusint
     *
     * @param string $alphavirusint
     *
     * @return Testresults
     */
    public function setAlphavirusint($alphavirusint)
    {
        $this->alphavirusint = $alphavirusint;

        return $this;
    }

    /**
     * Get alphavirusint
     *
     * @return string
     */
    public function getAlphavirusint()
    {
        return $this->alphavirusint;
    }

    /**
     * Set lissavirusfr
     *
     * @param string $lissavirusfr
     *
     * @return Testresults
     */
    public function setLissavirusfr($lissavirusfr)
    {
        $this->lissavirusfr = $lissavirusfr;

        return $this;
    }

    /**
     * Get lissavirusfr
     *
     * @return string
     */
    public function getLissavirusfr()
    {
        return $this->lissavirusfr;
    }

    /**
     * Set lissavirusorg
     *
     * @param string $lissavirusorg
     *
     * @return Testresults
     */
    public function setLissavirusorg($lissavirusorg)
    {
        $this->lissavirusorg = $lissavirusorg;

        return $this;
    }

    /**
     * Get lissavirusorg
     *
     * @return string
     */
    public function getLissavirusorg()
    {
        return $this->lissavirusorg;
    }

    /**
     * Set lissavirusgs
     *
     * @param string $lissavirusgs
     *
     * @return Testresults
     */
    public function setLissavirusgs($lissavirusgs)
    {
        $this->lissavirusgs = $lissavirusgs;

        return $this;
    }

    /**
     * Get lissavirusgs
     *
     * @return string
     */
    public function getLissavirusgs()
    {
        return $this->lissavirusgs;
    }

    /**
     * Set lissaviruscx
     *
     * @param string $lissaviruscx
     *
     * @return Testresults
     */
    public function setLissaviruscx($lissaviruscx)
    {
        $this->lissaviruscx = $lissaviruscx;

        return $this;
    }

    /**
     * Get lissaviruscx
     *
     * @return string
     */
    public function getLissaviruscx()
    {
        return $this->lissaviruscx;
    }

    /**
     * Set lissavirusint
     *
     * @param string $lissavirusint
     *
     * @return Testresults
     */
    public function setLissavirusint($lissavirusint)
    {
        $this->lissavirusint = $lissavirusint;

        return $this;
    }

    /**
     * Get lissavirusint
     *
     * @return string
     */
    public function getLissavirusint()
    {
        return $this->lissavirusint;
    }
}
